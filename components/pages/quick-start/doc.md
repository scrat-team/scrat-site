## 1. 安装

```bash
npm install -g scrat
```

安装完成后执行 ``scrat -v`` 查看工具版本：

![scrat -v](version.gif)

*nix系统下使用 ``-g`` 参数全局安装scrat可能会遇到权限问题，解决办法请看 [这里](https://github.com/scrat-team/scrat/issues/1)

## 2. 示例

使用 [git](http://www.git-scm.com/) clone [官网项目](https://github.com/scrat-team/scrat-site/)（或直接 [下载](https://github.com/scrat-team/scrat-site/archive/master.zip) 解压）

```bash
git clone http://git.io/kcqNXQ
```

进入项目目录

```bash
cd scrat-site
```

开发目录结构一览

```bash
scrat-site
  |- component_modules (安装的第三方组件)
  |- components        (模块化资源目录)
  |- server            (nodejs服务器)
  |- views             (非模块化资源目录)
  |- component.json    (组件依赖描述)
  |- package.json      (nodejs依赖描述)
  |- fis-conf.js       (构建工具配置文件)
  |- LICENSE
  `- README.md
```

## 3. 构建

```bash
scrat release
```

![scrat release](release.gif)

工具构建之后，会把构建好的代码发布到调试目录下（执行``scrat server open``命令可以查看该目录），不会污染源码目录。release命令输出的点点点代表参与构建的源码文件，每个点代表一个文件，颜色暗的点表示该文件构建速度较快（小于10ms），颜色亮的点表示该文件构建速度较慢（小于100ms）

## 4. 浏览

```bash
scrat server start
```

执行该命令会在调试目录下（执行``scrat server open``命令可以查看该目录）启动部署好的server目录下的服务器，启动server之前，会在调试目录下执行npm install安装package.json声明的依赖模块，因此用户不需要在源码工程中保存node_modules文件，保持源码目录的整洁干净。

完成服务器启动后，打开浏览器访问 http://127.0.0.1:5000 即可预览项目效果。

## 5. 文件监听+自动刷新

```bash
scrat release -wL
```

保持scrat server start启动的命令行终端不关闭，打开新的命令行终端，执行scrat release -wL命令，即可进入文件监听+浏览器自动刷新模式。修改项目中的代码并保存，浏览器将自动刷新页面，以提高开发效率。

> -wL是 --watch(监听) 和 --live(刷新) 两个参数的简写组合，更多参数及使用方式请查看[这里](/#!/todo)

## 6. 发布示例项目

```bash
scrat release -opd ../output
```

该命令会对项目进行压缩、请求合并与css雪碧图处理，并将结果发布到 ``../output``  目录中，这个目录下的文件即可部署上线了

> release命令始终会有一个发布路径，该路径的缺省值为server的调试目录，省略-d参数scrat会将构建后的代码发布到默认的调试目录，否则会发布到-d参数制定的目录下。

发布后的目录结构为：

```bash
../output
  ├─ public
  │  ├─ c (模块化资源部署目录)
  │  │  ├─ ftlabs-fastclick
  │  │  │  └── 1.0.2
  │  │  ├─ scrat-site
  │  │  │  └── 0.1.0
  │  │  ├─ scrat-team-each
  │  │  │  └── 0.1.0
  │  │  ├─ scrat-team-es5-safe
  │  │  │  └── 0.1.0
  │  │  ├─ scrat-team-extend
  │  │  │  └── 0.1.0
  │  │  ├─ scrat-team-font-awesome
  │  │  │  └── 4.1.0
  │  │  ├─ scrat-team-router
  │  │  │  └── 0.1.0
  │  │  └─ scrat-team-type
  │  │     └── 0.1.0
  │  └─ scrat-site (非模块化资源部署目录)
  │     └─ 0.1.0
  │        ├── boot.js
  │        ├── index.html
  │        └── lib
  ├─ server (nodejs服务器部署目录)
  └─ package.json (nodejs依赖描述)
```

scrat会按版本发布项目，发布后的目录路径中会出现项目版本号，采用按版本的非覆盖式发布可以实现静态资源缓存更新、灰度发布、快速回滚、保留历史版本等功能。

当然，本地调试服务器中也能预览优化后的效果，只要将代码release到默认的调试目录下，然后刷新浏览器查看即可：

```bash
scrat release -op
```

查看浏览器的network信息可以看到所有js、css、图片均被压缩，静态资源请求也已 [combo](/#!/todo) 形式合并，css雪碧图也完成处理了。

--------

至此，你已学会了scrat的基本用法，上手应该比较轻松吧:-D，如果在本章节使用上遇到什么问题，可以点击 [这里](/#!/todo) 给我们留言。scrat会给你带来前所未有的开发体验，更多酷爽功能可以继续阅读：

* [使用脚手架创建新项目](/#!/todo)
* [开发目录结构说明](/#!/todo)
* [安装Github上的组件](/#!/todo)
* [模块化开发与前端框架](/#!/todo)
* [文件监听与自动刷新](/#!/todo)
* [各种构建参数搭配](/#!/todo)
* [部署目录结构说明](/#!/todo)
* [调试服务器使用技巧](/#!/todo)