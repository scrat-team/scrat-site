exports.render = function(dom){
    // 使用__inline函数嵌入其他文件、图片。这里用作内嵌模板，
    // scrat已经配置了对handlebars后置的文件进行预编译，因此
    // 可以直接内嵌这里文件当做js函数执行
    var tpl = __inline('menu.handlebars');

    // 模板数据
    var data = {
        // 使用__uri函数来定位任意工程文件，scrat构建之后，会
        // 将其替换为发布地址，这样工程就不用关心部署问题了
        logo: __uri('logo.png'),
        home: '/#!/index',
        items: [
            {
                icon: 'compass',
                title: '快速开始',
                href: '/#!/quick-start'
            },
            {
                icon: 'flask',
                title: '开发工具',
                href: '/#!/tool'
            },
            {
                icon: 'leaf',
                title: '开发框架',
                href: '/#!/framework'
            }
        ]
    };

    data.height = data.items.length * 37;

    // 使用模板+数据得到html
    dom.innerHTML = tpl(data);

    // 绑定事件
    var btn = document.getElementById('menu-switch');
    btn.addEventListener('click', function(){
        var list = document.getElementById('menu-list');
        if(this.getAttribute('data-open') == 1){
            list.style.height = 0;
            this.setAttribute('data-open', '0');
        } else {
            list.style.height = data.height + 'px';
            this.setAttribute('data-open', '1');
        }
    }, false);
};