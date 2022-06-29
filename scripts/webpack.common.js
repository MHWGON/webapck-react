const path = require("path");
const chalk = require("chalk");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const pkgJSON = require("../package.json");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      // {
      //     test: /\.(jsx|js|ts|tsx)$/,
      //     include: [
      //         path.resolve(__dirname, '../src'),
      //     ],
      //     exclude: [/node_modules/],
      //     use: ['eslint-loader'],
      //     enforce: 'pre'
      // },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader", // TODO babel加载器
            options: {
              presets: [
                [
                  "@babel/preset-env", // 预制配置
                  {
                    corejs: { // TODO core-js 中有各种各样的 pollyfill，用于提升兼容性
                      version: 3
                    },
                    useBuiltIns: "usage" // 按需引入 pollyfill
                  }
                ],
                "@babel/preset-react" // React 环境
              ],
              plugins: ["@babel/plugin-transform-runtime"] // TODO 统一的 pollyfill，打包时候加载到代码中，减少冗余代码
            }
          },
          "ts-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024 // 25kb
          }
        },
        generator: {
          filename: "assets/imgs/[name].[hash:8][ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // TODO 定义在代码中可以替换的一些常量
      __DEV__: process.env.NODE_ENV === "development"
    }),
    new HtmlWebpackPlugin({ // TODO 模板入口文件打包设置
      template: path.resolve(__dirname, "../public/index.html"),
      title: pkgJSON.name,
      meta: {
        description: {
          type: "description",
          content: pkgJSON.description
        }
      },
      minify: "auto"
    }),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`
    })
  ]
};
