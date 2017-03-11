title: Yeoman学习笔记(一) InquirerJs 学习
date: 2015-05-11 14:38:30
tags: 
	- inquirer
	- yeoman
	- 工具
categories: 前端项目生成工具
---

最近想用Yeoman这个脚手架做一个自己平常用的项目生成器,项目地址：[http://yeoman.io/](http://yeoman.io/ "项目地址")。
阅读了一部分开发文档，当看到user interaction 这一节的时候，yeoman用到了prompt，并且这个prompt是用的InquirerJs 提供的，因此需要大致了解一下，github地址：[https://github.com/SBoudrias/Inquirer.js](https://github.com/SBoudrias/Inquirer.js)，这是一个prompt的库，用起来很方便，上面的文档很详细，还有例子，下面是写了一个demo，来实例展示一下如何使用。

## 一、安装
	npm install inquirer --save
## 二、开始编写代码
	var inquirer=require('inquirer');
	inquirer.prompt([
    {
        type:'input',
        name:'firstName',
        message:function(answer){
            console.log(answer);   //这里的answer就是文档中所说的Anwser对象，
								  //当输入了之后，这对象会有以 name为键,输入的内容值
									//的对象存在                
            return 'please input first name';
        }
    },
    {
        type:'input',
        name:'secondName',
        message:function(answer){
            console.log(answer);
            return 'please input second name';
        }
    },
    {
        type:'confirm',
        name:'confirm',
        message:function(answer){
            console.log(answer);
            return 'confirm input?';
        }
    }
	],function(answers){
    	console.log('all answer',answers);
	});

基于这个库，我们还可以开发各种交互式命令的小工具，非常方便。