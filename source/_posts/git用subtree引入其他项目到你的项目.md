title: git用subtree引入其他项目到你的项目
date: 2015-01-11 11:59:30
categories: 工具
tags: 
	- git
	- 工具
keywords: git subtree
description: github subtree使用

---
--------
在使用git过程中发现要引入另一套框架，可以使用git subtree这个功能。

##1、子目录

###先要添加远程仓库##
	git remote add -f  子仓库名 子仓库地址

###使用subtree添加仓库到子目录中
	git subtree add --prefix=子目录名 子仓库名  分支	--squash

###更新子目录
	git subtree pull --prefix=<子目录名> <远程仓库> <分支> --squash
###把子目录的更新推送到原框架所在的仓库
	git subtree push --prefix=<子目录名>	<仓库>	<分支>

##2、从子目录读取(可选)
###从子仓库检出一个分支
	git checkout -b temp_branch <子仓库>/<分支>
###切回到主分支
	git checkout master
###使用git read-tree命令
	git read-tree --prefix=<目录> -u temp_branch
**命令成功之后 '目录' 中就会有子目录文件的拷贝**

详细说明请下载[progit](http://url.cn/YGulXh)这本中文版的git说明电子书