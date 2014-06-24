'use strict';

var express = require('express'),
    app = require('./index');

module.exports = function (dir) {
    return express.static(dir, {
        maxAge: app.get('env') === 'production' ? Infinity : 0
    });
};