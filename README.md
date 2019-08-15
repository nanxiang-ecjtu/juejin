# React + Redux + Hooks 仿掘金

> 规范， 构建， gitflow， codeReview

## webpack 构建

### init project

```
mkdir juejin & cd juejin
mkdir src & npm init
touch README.md eslint.json
```

### 编写 webpack 配置文件

#### 安装 webpack webpack-cli webpack-dev-server

```javascript
// 创建webpack默认配置文件
touch webpack.config.js
// 安装相关依赖
yarn add webpack webpack-cli webpack-dev-server -D

module.exports = {}
```

#### mode & devtools

这两个配置项用于区别开发环境还是生产环境，devtools 针对不同的环境映射文件不同，即 sourcemap

```javascript
mode: 'development',

devtools: 'cheap-module-eval-source-map' // 推荐开发环境使用
devtools: 'cheap-module-source-map' // 生产环境
```

#### entry & output

```javascript
// entry可以为字符串，也可以为数组，也可以为对象，
// 对象 key: val形式 对应多入口文件， 可以结合htmlWebpackPlugin来实现MPA
entry: {
    main: './src/index.js'
}

// 打包出口文件
output: {
    path: path.resolve(__dirname, './dist'), // 打包输出目录
    filename: '[name].bundle.js', // 入口文件打包出口文件名
    chunkFileName: '[name].[chunkhash].js', // 非入口打包出来的文件名称， 比如动态导入import
    sourceMapFilename: '[name].bundle.map.js',
    publicPath: '/', // 文件静态资源的引用路径
}
```

#### devServer 的配置

webpack-dev-server 本地搭建启的一个静态服务器，实现自动检测本地文件改动热更新，
以及一个可通过 proxy 配置代理

```javascript
devServer: {
    host: '0.0.0.0',
    port: 5000,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist/index.html'),
    open: true, // 启动弹出窗口
    hot: true, // 热加载 需配合 webpack.HotModuleReplacementPlugin
    historyApiFallback: true, // 所有的404都转到index.html
    proxy: { // 设置代理
        '/api': ''
    }
}

const { HotModuleReplacementPlugin } = require('webpack');
// 配合 hot: true 实现状态的局部更新
plugins: [
    new HotModuleReplacementPlugin()
]

```

```scss
body {
  background-color: #cccccc;
  color: #ffffff;
}

// 点击改变本地状态
// 改变scss内容， 样式改变，但是内容的状态还是不变，实现了布局刷新
```

```
// 但是react内容更新 状态还是没有保存
// 因为css-loader内置了某段代码，需要我们自己来编写， 具体稍后再讲
// 我们继续往下看

// react-hot-loader 记录react页面的state状态

yarn add react-hot-loader -D

```

#### img - url-loader & font - file-loader

```javascript
{
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            outputPath: 'images/', // 处理图片后的输出路径
            limit: 10 * 1024, // 当图片大于该参数时使用拷贝，否则处理成base64编码格式
        }
    }
},
{
    test: /\.(eot|woff2?|ttf|svg)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name]-[hash:5].min.[ext]',
            limit: 5000,
            publicPath: 'fonts/',
            outputPath: 'fonts/'
        }
    }
}
```

#### ES6 & React 的编译

```json
// 第一种方案 -- 业务代码使用， 库组件之类的不适用 会存在变量的全局污染
@babel/preset-env
@babel/polyfill
useBuiltIns: 'usage'


// 第二种方案
@babel/plugin-transform-runtime @babel/runtime-corejs2 @babel/runtime

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }
    ],
    "@babel/preset-react", // react解析
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2, // polyfill 需要使用@babel/runtime-corejs2"helpers": true,
        "regenerator": true,
        "useESModules": false,
        "absoluteRuntime": false,
      }
    ]
  ]
}

// ES6的转换
// @babel/preset-env 把 ES6, ES7等特性实现一些语法的转换，预设包 
// @babel/plugin-transform-runtime + @babel/runtime 在babel7下只包含helper函数
// @babel/runtime-corejs2 实现polyfill
// "useBuiltIns": "usage" 实现按需引入

```

#### 配置 scss 的编译 loader

```javascript
// 先安装需要的loader
yarn add style-loader css-loader sass-loader node-sass postcss-loader -D

{
    test: /\.scss$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                importLoaders: 2, // 保证在先经过前面几个loader
            }
        },
        'scss-loader',
        'postcss-loader'
    ]
},
```

#### MiniCssExtractPlugin 抽离Css文件

> 解决css直接被打包进js文件的问题， 单独打包css文件，提高效率

```javascript
yarn add mini-css-extract-plugin -D


```



#### 注意点

React编写的过程中有一些其他特性，需要额外的plugin来支持

```
"@babel/plugin-proposal-class-properties", // 支持一些类特性之类的
"@babel/plugin-proposal-decorators" // react-redux使用的装饰器语法可能不支持
```

---

### React 相关

#### 目录

#### Redux

#### Router

#### Jest

#### Hooks

### Webpack优化方案

### TypeScript重构

### 组件拆分

------------------------------
参考资料

[browserslist](https://github.com/browserslist/browserslist#readme)