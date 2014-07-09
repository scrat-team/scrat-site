'use strict';

//require依赖的文件
var extend = require('extend');

//定义页面和模块对应关系
var views = {
    '404': 'pages/404',
    'index': 'pages/index',
    'getting-start': 'pages/getting-start'
};

/**
 * 注册页面
 * @param {String|Object} name 页面名
 * @param {String|undefined} moduleName 模块名
 */
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

/**
 * 判断是否注册页面
 * @param {String} name 页面名
 * @returns {boolean}
 */
exports.has = function(name){
    return views.hasOwnProperty(name);
};

/**
 * 加载页面，未找到则展示404页面
 * @param {String} name 页面名
 */
exports.load = function(name){
    name = this.has(name) ? name : '404';
    require.async(views[name], function(page){
        console.log(page);
    });
};

/**
 * 渲染页面骨架
 * @param {HTMLElement} dom
 */
exports.render = function(dom){
    //使用__inline函数嵌入其他文件、图片
    //这里用作内嵌模板，fis会将它编译成字符串嵌入
    dom.innerHTML = __inline('layout.tpl');
};