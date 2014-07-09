//利用package.json文件定义项目名和版本
var meta = require('./package.json');
fis.config.set('name', meta.name);
fis.config.set('version', meta.version);

//排除源码目录下的node_modules目录
fis.config.set('project.exclude', 'node_modules/**');
//开启localstorage缓存
fis.config.set('framework.cache', true);

//jshint配置
fis.config.set('settings.lint.jshint', {
    //报错信息翻译成中文
    i18n: 'zh-CN',
    //排除框架文件、第三方模块
    ignored: [
        'views/lib/**',
        'component_modules/**'
    ],
    bitwise: true,
    camelcase: true,
    eqeqeq: true,
    forin: true,
    immed: true,
    indent: 4,
    newcap: true,
    noarg: true,
    noempty: true,
    nonew: true,
    quotmark: "single",
    undef: true,
    unused: true,
    strict: true,
    boss: true,
    trailing: true,
    eqnull: true,
    browser: true,
    devel: true,
    jquery: true,
    node: true,
    white: false
});