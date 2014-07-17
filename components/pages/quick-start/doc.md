## 安装开发工具

```bash
npm install -g scrat
```

安装完成后执行 ``scrat -v`` 查看一下工具版本：

![scrat -v](version.gif)

*nix系统下使用 ``-g`` 参数全局安装scrat可能会遇到权限问题，解决办法请看 [这里](https://github.com/scrat-team/scrat/issues/1)

## 下载示例项目

使用 [git](http://www.git-scm.com/) clone官网项目（也可以点击 [这里](https://github.com/scrat-team/scrat-site/archive/master.zip) 下载）

```bash
git clone https://github.com/scrat-team/scrat-site.git
```

进入示例项目目录

```bash
cd scrat-site
```

目录结构

```bash
scrat-site
  |-- component_modules
  |-- components
  |-- server
  |-- views
  |-- fis-conf.js
  |-- component.json
  |-- package.json
  |-- Procfile
  |-- LICENSE
  `-- README.md
```