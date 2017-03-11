title: Vuejs 0.12.x学习笔记——组件中数据继承
date: 2015-07-19 23:34:10
tags: 
	- MVVM
	- 前端框架
categories: 前端框架
description: 
---

Vuejs 0.12.x 在组件系统的Api上有些变化，首先是v-with 这个指令没有了，取而代之的是需要通过props来向子组件传递父组件或ViewModel的数据，例如:	
{% raw %}	
	
	<div id="component-demo">
		<user-profile user-profile="{{userProfile}}" title={{title}} v-ref="userProfile">
		</user-profile>
	</div>
	<script>
		var vm=new Vue({
        el:'#component-demo',
        data:{
            'title':'',
            'userProfile':'dp'
        },
        components:{
            'user-profile':{
                	template:'<h1>{{title}}</h1><p>{{userProfile}}</p>',
                	props:['title','userProfile']
            	}
        	}
    	});
	</script>

{% endraw %}
通过直接在标签上添加属性，在Mustache标签里添加父ViewModel的数据，在子组件props数组当中加入标签上属性的名字来继承数据，__注意当标签属性名当中出现了'-'时，在props里要写成驼峰的形式并且在使用这个数据的地方都要写成驼峰模式。在props当中出现的名字会被添加到数据上__

#####上面的props的类型是数组，下面会说明props为对象时的情况
{% raw %}

	 var vm=new Vue({
        el:'#component-demo',
        data:{
            'title':'',
            'userProfile':'dp'
        },
        components:{
            'user-profile':{
                template:'<h1>{{title}}</h1><p>{{userProfile}}</p>',
                props:{
                    title:{
                        type:String
                    }
                }
            }
        }
    });

{% endraw %}

`props` 的`title` 属性，键名就是从父类继承的数据的名称，`title`的值是一个对象，里面的`type` 属性值为`String` 这表示子组件上的`title`数据只能从父类继承`String` 类型的数据，
当父ViewModel设置的`title`数据类型与子组件所规定的不符，则子组件的`title`不会被设置。

以下下几点要注意:

- 当在标签上加上`title`属性后,如果父ViewModel初始化的`title`的数据类型与子组件`title`不符，那么子组件此时不会有`title`这个数据存在。
- 当标签上无`title`属性时，如果`props`对象里或当`props`数组里有`title`，此时在子组件上会有`title`数据，不会受父级影响
- 对于子组件设置`title`是不受类型约束的。 