'use strict';

//require依赖的文件
var extend = require('extend');
var each = require('each');

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
 * @param {boolean} preload 是否预加载其他页面
 */
exports.load = function(name, preload){
    //未注册页面则展示404
    name = this.has(name) ? name : '404';
    //异步加载
    require.async(views[name], function(page){

        //如果开启预加载，则在完成当前页面加载之后去异步加载其他页面
        if(preload){
            //将其他页面收集起来
            var others = [];
            each(views, function(moduleName, pageName){
                if(name !== pageName){
                    others.push(moduleName);
                }
            });
            //发起异步请求获取，不阻塞当前页面
            require.async(others);
        }
    });
};

/**
 * 设置页面title
 * @param {String} title
 */
exports.title = function(title){
    document.title = title;
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