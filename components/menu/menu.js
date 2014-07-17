
var each = require('each');

// 在require函数中可以使用相对路径引用文件
// 注意：不可以省略后缀名
exports.views = require('./views.js');
exports.links = require('./links.js');

exports.active = function(name){
    var items = document.querySelectorAll('#menu-list a[data-page]');
    each(items, function(item){
        var page = item.getAttribute('data-page');
        if(page === name){
            item.className = 'active';
        } else {
            item.className = '';
        }
    });
};

/**
 * 渲染menu模块
 * @param {HTMLElement} dom
 */
exports.render = function(dom){
    // 使用__inline函数嵌入其他文件、图片。这里用作内嵌模板，
    // scrat已经配置了对handlebars后置的文件进行预编译，因此
    // 可以直接内嵌这里文件当做js函数执行
    var tpl = __inline('menu.handlebars');

    // 模板数据
    var data = {
        // 使用__uri函数来定位任意工程文件，scrat构建之后，会
        // 将其替换为发布地址，这样工程就不用关心部署相关问题了
        logo: __uri('logo.png'),
        home: '/#!/index',
        views: exports.views,
        links: exports.links
    };

    data.height = data.views.length * 37;

    // 使用模板+数据得到html
    dom.innerHTML = tpl(data);

    var list = document.getElementById('menu-list');
    var isSupportTouch = !!('ontouchend' in document);
    var eventType = isSupportTouch ? 'touchend' : 'click';
    // 绑定事件
    document.getElementById('menu-switch').addEventListener(eventType, function(e){
        if(parseInt(list.style.height) == 0){
            list.style.height = data.height + 'px';
        } else {
            list.style.height = 0;
        }
        e.stopPropagation();
        e.preventDefault();
    }, false);
    document.body.addEventListener(eventType, function(){
        list.style.height = 0;
    }, false);
};