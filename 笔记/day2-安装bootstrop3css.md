## 安装admin-lte bootstarp3.X
    npm install --save admin-lte
## 安装bootstarp
    npm install --save bootstrap
## 引入bootstrap
    在angular.json(angular-cli.json)文件中
    "styles:":[
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"  ----引入node_modules中 bootstrap css
        "../node_modules/admin-lte/dist/css/AdminLTE.min.css"
        "../node_modules/admin-lte/dist/css/skins/skin-blue.min.css"
    ]
> 在这里当前文件目录下建议使用绝对路径，才能让angular找到相应的css 文件。

    "styles": [
                  "src/styles.css",
                  "D:\\angular_study\\auction\\node_modules\\admin-lte\\dist\\css\\AdminLTE.min.css",
                  "D:\\angular_study\\auction\\node_modules\\bootstrap\\dist\\css\\bootstrap-theme.min.css",
                  "D:\\angular_study\\auction\\node_modules\\admin-lte\\dist\\css\\skins\\skin-blue.min.css",
                  "D:\\angular_study\\auction\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css"
    
                ],
                

## 安装jquery
    npm 
    
    
>总结一下，引入css文件就要zai angular.json文件中 "styles:"中加入。
styles里，不能有多余的逗号，也不能有多余的空双引号；
>js引入文件放在
"scripts": [
              "D:\\angular_study\\auction\\node_modules\\admin-lte\\bower_components\\jquery\\dist\\jquery.min.js",
              "D:\\angular_study\\auction\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js",
              "D:\\angular_study\\auction\\node_modules\\admin-lte\\dist\\js\\adminlte.min.js"
            ],
>图片等静态文件可以放置在：assets文件夹下；

 