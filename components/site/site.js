'use strict';

// require依赖的文件
var extend = require('extend');
var each = require('each');
var menu = require('menu');

// 定义页面和模块对应关系
var views = {
    '404': 'pages/404',
    'index': 'pages/index'
};

each(menu.views, function(view){
    views[view.name] = 'pages/' + view.name;
});

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
 * @param {Context} context 访问路径信息
 * @param {boolean} preload 是否预加载其他页面
 */
exports.load = function(context, preload){
    // 未注册页面则展示404
    var name = context.params.page;
    name = this.has(name) ? name : '404';
    var container = document.getElementById('main-views');
    // 异步加载
    require.async(views[name], function(page){
        var pages = container.querySelectorAll('[data-page]');
        each(pages, function(dom){
            var p = dom.getAttribute('data-page');
            var clazz = dom.className.replace(/ active\b/, '');
            if(p === name){
                dom.innerHTML = '<div class="main-view-inner markdown-body">' + page.getContent() + '</div>';
                dom.className = clazz + ' active';
            } else {
                dom.className = clazz;
            }
        });

        // 如果开启预加载，则在完成当前页面加载之后去异步加载其他页面
        if(preload){
            // 将其他页面收集起来
            var others = [];
            each(views, function(moduleName, pageName){
                if(name !== pageName){
                    others.push(moduleName);
                }
            });
            // 发起异步请求获取，不阻塞当前页面
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
    // 使用__inline函数嵌入其他文件、图片。这里用作内嵌模板，
    // scrat已经配置了对handlebars后置的文件进行预编译，因此
    // 可以直接内嵌这里文件当做js函数执行
    var tpl = __inline('site.handlebars');
    dom.innerHTML = tpl({
        views: views
    });

    // 加载菜单模块
    var menu = require('menu');
    menu.render(document.getElementById('main-menu'));
};