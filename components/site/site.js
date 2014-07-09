'use strict';

//require依赖的文件
var extend = require('extend');

//定义页面和模块对应关系
var views = {
    '404': 'pages/404',
    'index': 'pages/index',
    'getting-start': 'pages/getting-start'
};

//使用__inline函数嵌入其他文件
var tpl = {
    layout: __inline('layout.tpl')
};

exports.register = function(name, moduleName){
    switch(typeof name){
        case 'string':
            views[name] = moduleName;
            break;
        case 'object':
            extend(views, name);
            break;
    }
};

exports.has = function(name){
    return views.hasOwnProperty(name);
};

exports.load = function(name){
    name = this.has(name) ? name : '404';
    require.async(views[name], function(page){
        console.log(page);
    });
};

exports.render = function(dom){
    dom.innerHTML = tpl.layout;
};