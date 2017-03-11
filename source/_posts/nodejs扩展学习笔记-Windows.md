title: nodejs扩展学习笔记(Windows)
date: 2016-08-14 22:29:55
tags:
	- nodejs
	- C++
categories: Nodejs扩展
keywords: Nodejs C++ 扩展
description: Windows 下Nodejs C++扩展
---
##### 最近着手开始学习nodejs扩展的开发，是为以后用electron ([electron项目主页](http://electron.atom.io/)) 做客户端打个基础，也是为了熟悉js如何与`C++`交互，客户端的话可能需要用到`C++`的一些东西，因此这里选择在windows下搭建开发环境，nodejs 版本为4.x。
<!-- more -->
### 一、windows下nodejs addon 环境的搭建
- VC++ 的开发先装个visual studio吧，装个Visual Studio 2015就好了，接下来就是漫长的安装过程。
- 装完之后找到`MSBuild\14.0\Bin`，一般在`C:\Program Files (x86)`中，把这个路径配到环境变量里，这样可以用命令行调用 MSBuild.exe对visual stdio 的工程文件 `.sln`进行编译。
- 安装cmake 这里没有使用node-gyp进行构建，其实两个的道理一样都是生成VS工程文件然后用VC的工具链进行构建，但是适用性更广泛一些。
- 下载nodejs 4.x源码，这一步要进行源码编译，命令行下执行vcbuild.bat进行debug 32位版本nodejs的编译，具体是参考这篇老外的文章
[http://computer-vision-talks.com/how-to-debug-nodejs-addons-in-visual-studio/](http://computer-vision-talks.com/how-to-debug-nodejs-addons-in-visual-studio/)
在这里也可以找到如何在vs下对扩展进行调试，亲测。
* * *
### 二、cmake的编写



