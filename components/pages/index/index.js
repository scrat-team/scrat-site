'use strict';

module.exports = {
    getHTML: function () {
        var data = [
            {
                title: '模块化开发',
                icon: 'cubes',
                href: '/#!/todo'
            },
            {
                title: '按版本发布',
                icon: 'code-fork',
                href: '/#!/todo'
            },
            {
                title: '模块生态',
                icon: 'github',
                href: '/#!/todo'
            },
            {
                title: '按需加载',
                icon: 'crosshairs',
                href: '/#!/todo'
            },
            {
                title: '请求合并',
                icon: 'flash',
                href: '/#!/todo'
            },
            {
                title: '本地缓存',
                icon: 'database',
                href: '/#!/todo'
            },
            {
                title: '代码压缩',
                icon: 'leaf',
                href: '/#!/todo'
            },
            {
                title: '代码校验',
                icon: 'search',
                href: '/#!/todo'
            },
            {
                title: 'CSS雪碧图',
                icon: 'th',
                href: '/#!/todo'
            },
            {
                title: '本地服务器',
                icon: 'rocket',
                href: '/#!/todo'
            },
            {
                title: '文件监听',
                icon: 'eye',
                href: '/#!/todo'
            },
            {
                title: '自动刷新',
                icon: 'refresh',
                href: '/#!/todo'
            },
            {
                title: '资源内嵌',
                icon: 'archive',
                href: '/#!/todo'
            },
            {
                title: '多语言编译',
                icon: 'code',
                href: '/#!/todo'
            },
            {
                title: '项目脚手架',
                icon: 'wrench',
                href: '/#!/todo'
            }
        ];
        var tpl = __inline('index.handlebars');
        return tpl(data);
    }
};