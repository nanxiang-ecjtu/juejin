# 前端项目架构设计

## 项目简介

这是一个主要基于 Webpack + React + Redux + Sass 技术的，且前后分离的 Web 单页应用。

## 设计目标

- 单页 SPA 应用
- 前后端分离
- 适宜多人协作开发
- 根据打包项目所在独立维护的状态树保证性能
- 应用展示菜单可通过配置控制

## 技术库和框架

#### 基本技术库和框架
- React
- Redux
- Sass
- Styled Component
- Lodash

#### 其他技术点
- Webpack4
- Babel7
- ES6
- PWA
- ESLint


## 项目基本结构

#### 开发结构
```bash
| - juejin
    | - node_modules npm安装模块
    | - build 配置文件目录，主要包含Webpack配置(暂未适配)
        | - base
        | - dev
        | - prod
        | - config.js
    | - dist 分发目录
    | - src
        | - widgets 全局UI小组件
        | - consts   全局常量
        | - utils 工具文件
    | - .babelrc babel配置
    | - eslintrc.json eslint配置，可以自定义规则
    | - config.js 配置文件，包括devServer的相关信息
    | - README.md 文档
```

#### 编译输出结构
```bash
| - juejin
    | - index.html
```

## 架构优势
- 前后端分离：更好的前端交互体验，提升前端开发效率
- 单页 SPA 架构：提供类 Native 应用开发体验
- 基于 Webpack, React 生态：提供了强大的社区优化插件、以及丰富的交互组件
- 支持 Typescript, 代码维护性、健壮性更好
- ..
