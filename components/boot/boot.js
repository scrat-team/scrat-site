'use strict';

var each = require('each'),
    router = require('router'),
    site = require('site'),
    views = {
        index: 'pages/index',
        'getting-start': 'pages/getting-start'
    };

router('*', function (ctx, next) {
    var name = ctx.pathname.match(/^\/([^\/]+)/),
        others = [];

    if (name && views.hasOwnProperty(name[1])) {
        name = name[1];
        each(views, function (id, n) {
            if (n !== name) others.push(id);
        });

        require.async(views[name], function (view) {
            require.async(others);

            site.register(name, view);
            site.load(name);
        });
    } else {
        router.replace('/index');
    }
});

module.exports = function () {
    router();
};