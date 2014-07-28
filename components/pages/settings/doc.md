## fis-conf.js

scrat是基于 [fis](http://fis.baidu.com) 打造的前端集成解决方案，其配置风格也遵循fis的设计规范，项目根目录下的 ``fis-conf.js`` 文件即为工具配置文件。

```bash
project
  ├─ component_modules (生态组件目录)
  ├─ components        (模块化资源目录)
  ├─ views             (非模块化资源目录)
  └─ fis-conf.js       (构建工具配置文件)
```

## name

> 项目名（必须设置）

* 类型：``string``
* 解释：每个scrat项目需要指定一个项目名，构建时会将项目名作为发布路径中的一部分，这样可以在一台机器上部署多个项目的构建结果。
* 示例：
    ```javascript
    fis.config.set('name', 'my_proj');
    ```

## version

> 项目版本（必须设置）

* 类型：``string``
* 解释：每个scrat项目需要指定一个项目版本，构建时会将项目版本作为发布路径的一部分，这样可以在一个项目下部署多个版本的构建结果。
* 示例：
    ```javascript
    fis.config.set('version', '1.0.1');
    ```

## framework

### framework.cache

### framework.combo

### framework.comboPattern

### framework.urlPattern

### framework.alias

## settings

### settings.parser.marked

### settings.parser.stylus

### settings.parser.handlebars

### settings.optimizer.uglify-js

### settings.optimizer.clean-css

### settings.optimizer.html-minifier

### settings.lint.jshint

### settings.spriter.csssprites

## modules

### modules.parser

### modules.preporcessor

### modules.postprocessor

### modules.lint

### modules.test

### modules.optimizer

### modules.prepackager

### modules.packager

### modules.spriter

### modules.postpackager