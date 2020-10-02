# fast-vue3
# 使用vite构建vue3
```
 ├── node_modules                	   依赖包
 ├── src                         	   源码
 │   ├── assets                  	   静态资源
 │   ├── common                  
 │   │     ├── config           	   配置信息
 │	 │     │      │── module           api子配置
 │	 │     │      │── index.js         api配置入口
 │	 │     │      │── cfg.js           全局配置设定
 │   │     ├── di                      provide-inject 注入
 │   │     ├── lib                     js包
 │   │     ├── router                  路由页面配置
 │   │     │      ├── module           router子配置
 │   │     │      ├── index.js         router配置入口
 │   │     ├── store                   状态管理配置
 │   │     │      ├── module           vuex子配置
 │   │     │      ├── index.js         vuex配置入口
 │   │     ├── tools                   工具
 │   │     │      ├── cache_time.js    缓存数据时间设定
 │   │     │      ├── cmake_router.js  路由拦截
 │   │     │      ├── cmake_tools.js   自定义工具
 │   │     │      ├── http_action.js   请求封装
 │   │     │      ├── http_request.js  请求和响应拦截
 │   │     │── components              组件
 │   │     │── views                   页面入口
 │   │     │── App.vue                 模型
 │   │     │── index.css               全局样式
 │   │     │── main.js                 入口
 │   ├── vite-plugin                   vite自定义插件
 ├── .gitignore                  忽略提交到git目录文件
 ├── package.json                依赖包及配置信息文件
 ├── vite.config.js              vite配置文件
```
