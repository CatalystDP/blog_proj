---
title: browserSync 使用笔记
date: 2015-05-07 17:09:48
tags: 
	- browserSync
	- 工具
categories: 工具
keywords: browserSync 浏览器资源同步
descriptions: browserSync 初步使用小结
---
最近在毕设当中用到了browserSync这个工具，项目主页:[http://www.browsersync.io/](http://www.browsersync.io/)。
这个工具的好处是可以在我们改变了本地静态资源即js，css，html的时候自动帮我们将资源加载进浏览器而不会刷新整个页面，这对于我们开发SPA应用的时候非常有好处，我们不需要按F5然后再进行操作跳转到那个页面去，可以节省一些时间，下面大致讲一下如何结合gulp来使用browserSync。

## 安装方式
	npm install -g browser-sync
__tips:由于browserSync还可以运行在命令韩模式下，所以最好全局安装下__

## 与gulp结合使用
__这里给出一个例子__
### 使用stylus构建成css之后自动加载进浏览器
	
	var gulp=require('gulp');
	var browserSync=require('browser-sync').create();
	var stylus = require('gulp-stylus');
	gulp.task('stylus',function(){
		return gulp.src('/path/to/stylus').
				pipe(stylus()).
				pipe(/path/to/css).
				pipe(browserSync.reload({stream:true}));
	});
	gulp.task('servecss',function(){
		browserSync.init({
			proxy:'http://localhost:3000/path',
			host:'http://domain.com'
			port:80,
			open:false		
		});
		gulp.watch('/path/to/stylus',['stylus']);
	});
在命令行执行 ` gulp servecss ` 之后，会在命令行显示
	
	Proxying: http://localhost:3000
	Access URLs:
	---------------------------
	Local: http://localhost:80/path ##这里的path就上面设置，proxy里的path
	External: http://domain.com:80/path
	---------------------------
	UI: http://localhost:3001
	Extern UI: http://domain.com:3001
__这里的UI 是指在浏览器输入 `localhost:3001` 之后，会打开一个web的控制面板，我们在 `overview` 里面的 `External` 这里点击new tab之后会打开 `http://domain.com:80/path`
这时这个页面就可以被browsersync注入静态资源了__

## 原理
browsersync 向浏览器注入了一个browsersync的js文件，并且使用了socket.io库，当本地文件改动之后，浏览器里的客户端browsersync.js收到的数据，这样达到注入资源的目的。注入资源的时候可以用fiddler抓包看一下，会抓到更新后的静态资源。