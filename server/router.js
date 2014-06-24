'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    req.url = router.options.index || '/';
    next();
});

module.exports = function (options) {
    router.options = options || {};
    return router;
};