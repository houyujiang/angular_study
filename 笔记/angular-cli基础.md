# angular-cli基础
## 1.angular2 简介
    开发：效率提升
    运行：效果提升
## 2.angular cli 简介
    快速创建angular2 项目及组件(new generate)
    使用angluar cli 能够进行开发同步(ne serve)
    使用angular cli 简单进行测试和打包(test build)
## 3.简明架构
    Amber cli ->Angular cli <- webpack
## 4.安装angular cli
    安装npm ->安装nodejs
    (使用淘宝镜像及cpm)
    npm install -g cnpm --registry=https//registry.npm.taobao.org
    cnpm install -g @angular/cli
    查看是否成功：
    所有angular命令 ng开头
    ng version (查看是否安装成功)
## 5.Hello Angular CLI
    目标：使用Angular CLI 创建项目并运行/分析项目的目录结构
    操作步骤：
    1.ng new my-app(my-app可替换)
    2.cd my-app
    3.ng serve(热部署)
## 6.Angular CLI重要指令之ng new
    目标：学习并理解ng new的主要功能和使用方法
    参数分类：
    开发辅助(--dry-run)
    修改项目默认值（--perfix）
    如何查找指令：
    ng -help查找
    --dry-run
    -verbose
    --link-cli
    --skip-install
    --skip-git
    --skip-tests
    --routing
    等等
## 7.Angular CLI重要指令之ng serve
    目标：学习并理解ng serve 主要功能和使用方法
    --代码的同步编译和同步跟新
    服务器默认4200端口
    ng serve --port 4201    更改端口到4201
## 8.Angular CLI重要指令之ng generate
    目标：主要功能和使用方法
    ng g (g是generate的简写)
    1. ng g component test(构建一个名叫test的组件)
    这个指令会自动注册test组件,更新app.module.ts,也就是注册进app.module.ts,生成对应的四个文件：test.componet.css/test.componet.html/test.component.spec.ts/test.componet.ts
    2. ng g service test -m app.module 创建一个service(服务组件) 注册到模块 不带html
    引入服务-依赖注入
    例子：
    
    import {TestService}from './test.service'
 
    export class AppComponent{
        titile = 'app works1';
        constructor(private service :TestService){
            service.hello();
        }
    }
    

    
    
    
  
    
    