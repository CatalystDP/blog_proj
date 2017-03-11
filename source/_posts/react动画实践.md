title: react动画实践
date: 2016-07-02 23:43:59
tags:
    - 框架
    - React
categories:
    - 前端框架
---

#### React 动画实践

##### ReactTransitionGroup使用
- ReactTransitionGroup 必须是已经被挂载的组件，例如:
       ```
        let Component=React.createClass({
            render(){
                return <ReactTransitionGroup>
                    [children]
                </ReactTransitionGroup>
            }
        });  
       ```       
- children 组件上必须要有key才能触发React的动画，例如:
    
        let ListItem = React.createClass({
        componentWillEnter(done){
            console.log('ListItem will enter');
            done();
        },
        render(){
            return (
                <div>{this.props.children}</div>
            );
          }
        });
        let View=React.createClass({
            render(){
                 let list = this.state.items.map((item, index)=> {
                    return <ListItem key={index}>{item.text}</ListItem>
                });
            }
        });
   当某个时刻View内调用setState后将会触发渲染，ReactTransitionGroup 会比对当前状态的key和下个状态的key并会在新增的key上
   触发ListItem的componentWillEnter 生命周期。

#### 总结
- 组件只要放在ReactTransitionGroup内并且key是变动的就会触发动画。