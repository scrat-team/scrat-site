/*
 * 项目构建时，_‍_FRAMEWOR‍K_CONFIG__变量会被替换成框架配置，包括依
 * 赖树、别名表、combo连接形式、配置文件等，这样就可以对资源请求进行
 * 按需、合并等优化了
 */
require.config(__FRAMEWORK_CONFIG__);

/*
 * 启动入口，依赖了router、each、ea5-safe、font-awesome几个模块，
 * require.async函数会根据require.config中的依赖关系去加载这些模
 * 块及其依赖的模块，都完成后才会执行回调
 */
require.async(['router', 'site', 'es5-safe', 'font-awesome'], function (router, site) {
    
    site.render(document.body);
    
    //带有page路径的路由
    router('/:page', function (ctx) {
        //从hash中获取页面名并加载
        site.load(ctx.params.page);
    });
    
    //其他未命中情况
    router('*', function(){
        router.replace('/index');
    });
    
    router();
});