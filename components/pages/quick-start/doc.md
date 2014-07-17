## 安装开发工具

```bash
npm install -g scrat
```

安装完成后执行 ``scrat -v`` 查看一下工具版本：

![scrat -v](version.gif)

*nix系统下使用 ``-g`` 参数全局安装scrat可能会遇到权限问题，解决办法请看 [这里](https://github.com/scrat-team/scrat/issues/1)

## 下载示例项目

使用 [git](http://www.git-scm.com/) clone [官网项目](https://github.com/scrat-team/scrat-site/)（也可以点击[这里](https://github.com/scrat-team/scrat-site/archive/master.zip)下载并解压）

```bash
git clone http://git.io/kcqNXQ
```

进入示例项目目录

```bash
cd scrat-site
```

目录结构简述

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

## 构建示例项目

```bash
scrat release
```

![scrat release](release.gif)

工具构建之后，会把构建好的代码发布到调试目录下（执行``scrat server open``命令可以查看该目录），不会污染源码目录。release命令输出的点点点代表参与构建的源码文件，每个点代表一个文件，颜色暗的点表示该文件构建速度较快（小于100ms），颜色亮的点表示该文件构建速度较慢(小于200ms)

## 浏览示例项目

```bash
scrat server start
```

执行该命令会在调试目录下（执行``scrat server open``命令可以查看该目录）启动部署好的server目录下的服务器，启动server之前，会在调试目录下执行npm install安装package.json声明的依赖模块，因此用户不需要在源码工程中保存node_modules文件，保持源码目录的整洁干净。

## 发布示例项目

```bash
scrat release -lompd ../output
```

对项目进行校验、压缩、加md5戳、请求合并、将结果发布到../output目录。其中 ``-lompd ../output`` 是多个参数的组合写法，它等价于 ``-l -o -m -p -d ../output``，