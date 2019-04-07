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
## 安装jquery
    npm 