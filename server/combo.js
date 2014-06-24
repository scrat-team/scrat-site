'use strict';

var path = require('path'),
    fs = require('fs'),
    app = require('./index');

module.exports = function (dir) {
    dir = dir || '/public/c';
    var root = app.get('root') + dir,
        logger = app.get('logger') || console,
        cache = {};

    return function (req, res, next) {
        var i = req.originalUrl.indexOf('??'),
            j = req.originalUrl.indexOf('&'),
            url, ext, files, contents = [], rs;

        if (~i) {
            url = ~j ? req.originalUrl.slice(i + 2, j) : req.originalUrl.slice(i + 2);
            ext = path.extname(url);
            if (ext) res.type(ext.slice(1));
            if (cache[url]) return res.send(cache[url]);

            files = url.split(',');
            files.forEach(function (file) {
                if (cache[file]) return contents.push(cache[file]);

                var filePath = path.resolve(root, file),
                    content;
                try {
                    content = fs.readFileSync(filePath, 'utf-8');
                } catch (e) {
                    logger.error('[combo] cannot read file: ' + filePath + '\n', e.stack);
                }
                if (content) contents.push(cache[file] = content);
            });

            rs = contents.join('\n');
            if (contents.length === files.length) {
                cache[url] = rs;
            } else {
                logger.error('[combo] some files not found');
            }
            res.send(rs);
        } else {
            next();
        }
    };
};