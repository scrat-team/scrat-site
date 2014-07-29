'use strict';

module.exports = {
    getHTML: function () {
        var data = [
            {
                title: '模块化开发',
                icon: 'cubes',
                href: '/#!/modular'
            },
            {
                title: '按版本发布',
                icon: 'code-fork',
                href: '/#!/settings?title=version'
            },
            {
                title: '模块生态',
                icon: 'github',
                href: '/#!/components'
            },
            {
                title: '按需加载',
                icon: 'crosshairs',
                href: '/#!/framework?title=scrat.js'
            },
            {
                title: '请求合并',
                icon: 'flash',
                href: '/#!/framework?title=3. 网络请求'
            },
            {
                title: '本地缓存',
                icon: 'database',
                href: '/#!/framework?title=4. 本地缓存'
            },
            {
                title: '代码压缩',
                icon: 'leaf',
                href: '/#!/settings?title=settings.optimizer.uglify-js'
            },
            {
                title: '代码校验',
                icon: 'search',
                href: '/#!/settings?title=settings.lint.jshint'
            },
            {
                title: 'CSS雪碧图',
                icon: 'th',
                href: '/#!/settings?title=settings.spriter.csssprites'
            },
            {
                title: '本地服务器',
                icon: 'rocket',
                href: '/#!/command?title=scrat server start'
            },
            {
                title: '文件监听',
                icon: 'eye',
                href: '/#!/command?title=本地开发'
            },
            {
                title: '自动刷新',
                icon: 'refresh',
                href: '/#!/command?title=本地开发'
            },
            {
                title: '资源内嵌',
                icon: 'archive',
                href: '/#!/todo'
            },
            {
                title: '多语言编译',
                icon: 'code',
                href: '/#!/settings?title=settings.parser.stylus'
            },
            {
                title: '项目脚手架',
                icon: 'wrench',
                href: '/#!/command?title=scrat init'
            }
        ];
        var tpl = __inline('index.handlebars');
        return tpl(data);
    }
};