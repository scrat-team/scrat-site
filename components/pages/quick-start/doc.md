## 1. 安装开发工具

```bash
npm install -g scrat
```

安装完成后执行 ``scrat -v`` 查看一下工具版本：

![scrat -v](version.gif)

*nix系统下使用 ``-g`` 参数全局安装scrat可能会遇到权限问题，解决办法请看 [这里](https://github.com/scrat-team/scrat/issues/1)

## 2. 下载示例项目

使用 [git](http://www.git-scm.com/) clone [官网项目](https://github.com/scrat-team/scrat-site/)（也可以直接[下载](https://github.com/scrat-team/scrat-site/archive/master.zip)）

```bash
git clone http://git.io/kcqNXQ
```

进入示例项目目录

```bash
cd scrat-site
```

目录结构一览

```bash
scrat-site
  |-- component_modules(安装的第三方组件)
  |-- components       (模块化资源目录)
  |-- server           (nodejs服务器)
  |-- views            (非模块化资源目录)
  |-- component.json   (组件依赖描述)
  |-- package.json     (nodejs依赖描述)
  |-- fis-conf.js      (构建工具配置文件)
  |-- LICENSE
  `-- README.md
```

## 3. 构建示例项目

```bash
scrat release
```

![scrat release](release.gif)

工具构建之后，会把构建好的代码发布到调试目录下（执行``scrat server open``命令可以查看该目录），不会污染源码目录。release命令输出的点点点代表参与构建的源码文件，每个点代表一个文件，颜色暗的点表示该文件构建速度较快（小于10ms），颜色亮的点表示该文件构建速度较慢(小于20ms)

## 4. 浏览示例项目

```bash
scrat server start
```

执行该命令会在调试目录下（执行``scrat server open``命令可以查看该目录）启动部署好的server目录下的服务器，启动server之前，会在调试目录下执行npm install安装package.json声明的依赖模块，因此用户不需要在源码工程中保存node_modules文件，保持源码目录的整洁干净。

完成服务器启动后，打开浏览器访问页面即可预览项目效果：

> http://127.0.0.1:5000

## 5. 发布示例项目

```bash
scrat release -lompd ../output
```

该命令会对项目进行校验、压缩、加md5戳、请求合并、将结果发布到 ``../output``  目录中，output目录下的文件即可部署上线了。有关release命令的更多用法，请继续阅读[这里](/#!/todo)

--------

至此，你已学会了scrat的基本用法，上手应该比较轻松吧:-D，如果在本章节使用上遇到什么问题，可以点击 [这里](/#!/todo) 给我们留言。scrat会给你带来前所未有的开发体验，更多酷爽功能可以继续阅读：

* [使用脚手架创建新项目](/#!/todo)
* [开发目录结构说明](/#!/todo)
* [安装Github上的组件](/#!/todo)
* [模块化开发与前端框架](/#!/todo)
* [文件监听与自动刷新](/#!/todo)
* [各种构建参数搭配](/#!/todo)
* [部署目录结构说明](/#!/todo)
* [nodejs服务器使用与开发](/#!/todo)