// 排除源码目录下的node_modules目录，不对其进行构建
fis.config.set('project.exclude', 'node_modules/**');

// 利用package.json文件定义项目名和版本
var meta = require('./package.json');
fis.config.set('name', meta.name);
fis.config.set('version', meta.version);

// 对md、tpl后缀的文件指定用fis-optimizer-html-minifier插件进行压缩
fis.config.set('modules.optimizer.md', 'html-minifier');
fis.config.set('modules.optimizer.tpl', 'html-minifier');

// scrat.js框架开启localstorage缓存
fis.config.set('framework.cache', true);
// 静态资源加载路径模式
fis.config.set('framework.urlPattern', '/public/c/%s');

//设置url前缀
fis.config.set('urlPrefix', '/public');

// fis-lint-jshint插件配置
fis.config.set('settings.lint.jshint', {
    // 在jshint基础上加上了i18n配置，将报错信息翻译成中文
    i18n: 'zh-CN',
    // 在jshint基础上加上了ignored配置，排除框架文件、第三方模块
    ignored: [
        'views/lib/**',
        'component_modules/**'
    ],
    // 其他配置项请直接参阅jshint官网说明
    predef: [
        'define',
        'Handlebars',
        '__FRAMEWORK_CONFIG__',
        'ga'
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
    undef: true,
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

// 使用pngquant把png图片压缩为png8，减少质量
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');

// markdown的标题id前缀
fis.config.set('settings.parser.marked.headerPrefix', 'user-content-');

// fis-optimizer-html-minifier插件配置
fis.config.set('settings.optimizer.html-minifier', {
    // fis直接将此配置传递给html-minfier模块
    // 因此相关配置项请直接参阅html-minifier文档
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: true
});