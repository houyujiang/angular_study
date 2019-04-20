# day3-路由

## 使用Angular Route导航
> 路由相关对象介绍
<table>       
    <tr>
        <th>名称</th>
        <th>简介</th>
    </tr>
    <tr>
         <td>Routes</td>
         <td>路由配置，保存着哪个URL对应展示哪个组件,以及在哪个RouterOutlet中展示组件</td>
    </tr>
    <tr>
         <td>Roulter-Oulte</td>
         <td>在html中标记路由内容呈现位置的占位符指令</td>
    </tr>
    <tr>
         <td>Router</td>
         <td>负责在运行时执行路由的对象，可以通过调用其navigate()和navigateByUrl()方法来导航到一个指定的路由</td>
    </tr>
    <tr>
         <td>ActivatedRoute</td>
         <td>当前激活的路由对象，保存着当前路由的信息，如路由地址、路由参数等</td>
    </tr>
</table>

## roulterLink 的值是个数组，用来传参数用。
## 参数快照，参数的订阅
```
    this.routeInfo.params.subscribe()参数订阅，每次参数改变，都会改变
    
    this.routeInfo.snapshot.params参数快照，入参改变，不会改变；有点节约资源，初始化的时候赋值。
```


