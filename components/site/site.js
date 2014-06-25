'use strict';

var each = require('each'),
    site = module.exports = {
        views: {}
    };

site.register = function (name, view) {
    return site.views[name] = view;
};

site.get = function (name) {
    if (!site.views.hasOwnProperty(name)) {
        throw new Error('view not found');
    }
    return site.views[name];
};

site.getOthers = function (name) {
    var others = {};
    each(site.views, function (view, n) {
        if (n !== name) others[n] = view;
    });
    return others;
};

site.load = function (name) {
    var view = site.get(name),
        others = site.getOthers(name);
    site.unload(Object.keys(others));
};

site.unload = function (name) {
    var names = Array.isArray(name) ? name : [name];
    names.forEach(function (name) {

    });
};