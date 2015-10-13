> 前端模块化框架肩负着 ``模块管理``、``资源加载`` 两项重要责任，与开发、工具、部署、性能优化等工程环节都有着非常紧密的联系。因此，模块化框架的设计应该最高优先级考虑工程需要。

## scrat.js

> https://github.com/scrat-team/scrat.js

scrat开发体系采用 [scrat.js](https://github.com/scrat-team/scrat.js) 作为模块化框架，与 [开发工具](https://www.npmjs.org/package/scrat) 紧密配合，从而实现 ``js/css依赖管理``、``请求合并``、``按需加载``、``本地缓存``等功能，性能优化效果明显，具有较强的工程特性。

> 之所以没有使用已有的模块化框架（比如[requirejs](http://requirejs.org/)），完全是出于工程需要，而非[NIH](http://en.wikipedia.org/wiki/Not_invented_here)思想作祟，有兴趣一探究竟的同学可以阅读这篇文章：《[前端工程与模块化框架](https://github.com/fouber/blog/issues/4)》。

## 工作原理

### 1. 源码示例

> 像写nodejs一样书写js模块

![源码效果](source.png)

其中``__FRAMEWORK_CONFIG__``变量会在构建时被工具替换为框架所需的各种配置数据。

### 2. 构建后代码

> 调整部署位置，自动包裹define函数，并把别名、依赖关系等信息输出给框架

![构建后代码](release.png)

### 3. 网络请求

> 由于框架通过``require.config``接口知道了所有模块的依赖关系，因此在调用require.async加载模块时，可以找到其依赖的所有js、css模块，再借助combo服务合并请求加载，一举实现按需加载和请求合并的功能。

上述示例页面执行``require.async('a', callback);``时会发起两个combo请求(js与css)：

* http://www.example.com/??proj/1.0.0/b.css,proj/1.0.0/a.css
* http://www.example.com/??proj/1.0.0/b.js,proj/1.0.0/a.js

请求全部加载完成后才会触发callblack函数。这种工具与框架配合解决模块化静态资源管理的方式，将工程性与前端性能发挥到了极致。开启comboe请求的具体配置方法请参考 [这里](/#!/settings?title=framework.combo)。

### 4. 本地缓存

当前 ``require.config`` 中配置了 ``cache`` 选项为 ``true`` 时，scrat会将请求回来的模块化js、css按文件存储到localstorage中，这样用户再次访问页面就不会发起请求，从而加快二次访问的展现速度。开启本地缓存的具体配置方法请参考 [这里](/#!/settings?title=framework.cache)。

## 接口说明

### require.config(options)
说明：设置并返回 scrat.js 配置选项

- @param {object} [options] - 配置选项
- @returns {object} options
- 配置项说明：
  - name: 项目名称，string类型
  - version: 项目版本，string类型
  - combo: 是否以combo形式发起请求，boolean类型，默认为false
  - cache: 是否开启localstorage缓存，boolean类型，默认为false
  - hash: 构建时生成的缓存更新戳
  - urlPattern: 单个资源加载路径模式，string类型，默认为``/c/%s``
  - comboPattern: combo请求的路径形式，string类型，默认为``/??%s``
  - alias: 模块别名表
  - deps: 模块依赖表

> 注意，require.config接口是前端框架与开发工具配合的衔接部分，这里的数据不用开发者自己配置，也不用关心太多，使用时只要在代码中书写 require.config(\_\_FRAMEWORK\_CONFIG\_\_)，工具在构建时会将``__FRAMEWORK_CONFIG__``替换成配置信息传递给框架，从而实现模块化管理。

示例：
```javascript
/**
 * scrat 在编译过程中会自动替换 __FRAMEWORK_CONFIG__ 为配置数据
 * 所以源码通常写成require.config(__FRAMEWORK_CONFIG__);构建
 * 后得到如下结果
 */
require.config({
    cache: true, // 开启 localStorage 缓存
    urlPattern: '/static/%s', // 资源加载路径
    comboPattern: '/combo??%s', // Combo 服务路径
    alias: {...}, //别名表
    deps: {...} //依赖表
});
```

### require.async(modules, callback)
说明：加载并运行一组 JS 模块

- @param {string|Array} modules - 要加载并运行的模块列表
- @param {function} callback - 全部模块及其依赖加载成功后的回调函数

示例：
```javascript
require.async(['ajax', 'event'], function (ajax, event) {
    ajax.get('/someObjs', {length: 10}, function (data) {
        event.emit('done', data);
    });
});
```

### define(id, factory)
说明：定义一个 JS 模块

- @param {string} id - 模块 id
- @param {function} factory - 模块的工厂函数

> 在scrat中，工具会对每个模块化文件自动包裹define函数，工程师实际上是不会接触到define函数的。

示例：
```javascript
define('hello', function (require, exports, module) {
    module.exports = function (name) {
        alert('Hello ' + name);
    };
});
```
