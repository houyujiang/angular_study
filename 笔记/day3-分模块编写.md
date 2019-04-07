# day3 分模块编写

## 命令行输入命令自动生成模块

    命令：ng g component header
        CREATE src/app/header/header.component.html (25 bytes)
        CREATE src/app/header/header.component.spec.ts (628 bytes)
        CREATE src/app/header/header.component.ts (269 bytes)
        CREATE src/app/header/header.component.css (0 bytes)
        UPDATE src/app/app.module.ts (475 bytes)
        创建四个文件：
        更新一个文件：app.module.ts:
        import { HeaderComponent } from './header/header.component';
            @NgModule({
              declarations: [
                AppComponent,
                HeaderComponent
              ],
              imports: [
                BrowserModule,
                AppRoutingModule
              ],
              providers: [],
              bootstrap: [AppComponent]
            })
            export class AppModule { }
# 改造 header模块：
# stock-manage.component.ts 里进行组件封装：
# 单页面应用 通过路由器
> 路由器给每个应用分配对应的url,在页面上定义一些插座，
