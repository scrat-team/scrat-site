//利用package.json文件定义项目名和版本
var meta = require('./package.json');
fis.config.set('name', meta.name);
fis.config.set('version', meta.version);

//排除
fis.config.set('project.exclude', 'node_modules/**');
fis.config.set('framework.cache', true);
fis.config.set('modules.optimizer.html', 'html-minifier');
fis.config.set('settings.lint.jshint', {
    i18n: 'zh-CN',
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