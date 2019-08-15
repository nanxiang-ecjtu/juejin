const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const RootDir = path.resolve(__dirname);

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: `${RootDir}/dist`,
    filename: "[name].bundle.js",
    publicPath: "/",
    sourceMapFilename: "[name].bundle.map.js",
    chunkFilename: '[name].[chunkhash].js', // 非入口文件打包名称
  },
  devServer: {
    // host: "0.0.0.0",
    // port: "5000",
    contentBase: `${RootDir}/dist`,
    inline: true,
    // quiet: true,
    open: true,
    hot: true,
    overlay: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]-[hash].[ext]",
            limit: 10 * 1024,
            outputPath: "images/" // 打包文件输出目录
          }
        }
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            limit: 5000,
            publicPath: "fonts/",
            outputPath: "fonts/"
          }
        }
      },
      {
          test: /\.(js|jsx)$/,
          use: {
              loader: 'babel-loader'
          }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "juejin",
      template: "./src/index.html",
    //   filename: "juejin.html",
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", ".jsx"],
    alias: {
      "@": path.join(__dirname, "./src"),
      views: path.join(__dirname, "./src/views")
    },
    modules: ["node_modules", "./src/widgets"], // 暂时node_modules和轮子采用绝对路径，其余必须相对路径
    enforceExtension: false, // 没有必要带后缀
    enforceModuleExtension:false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
