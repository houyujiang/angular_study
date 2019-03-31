# angular 学习笔记 day1
###开发环境搭建
1 . 安装nodejs
* 我选择安装的nodejs版本为 v10.15.3-x64.msi
 
2 . 切换到国内镜像
* 我使用的是淘宝镜像
 1. 通过命令配置：
 ``
 npm config set registry https://registry.npm.taobao.org
 ``
 2. 验证命令
 ``
 npm config get registry
 ``
 返回https://registry.npm.taobao.org，说明镜像配置成功。
 
3 .通过 ng创建一个名字叫auction的angula项目：
 1. 通过cmd命令行 到工作目录
 ``
 d:
 cd angular_study
 ``
 2. 使用ng命令
 ``
 ng new auction
 ``
 中间会跳出来选择样式类型，我选css
 
 