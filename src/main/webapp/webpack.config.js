const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
		
  entry:  __dirname + "/page/es6/js/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/page/es6/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  devtool: 'cheap-module-eval-source-map',
		
  devServer: {
	  contentBase: "./page",
	  historyApiFallback: true,
	  inline: true,
	  hot: true
  },
  module: {
      rules: [{
              test: /(\.jsx|\.js)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  query: {
//            	  options: {
                      presets: [ "es2015", "react" ]
                  }
              }
          },
          {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader",
                      options: {
                          modules: true // 指定启用css modules
//                          ,localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                      }
                  }, {
                      loader: "postcss-loader"
                  }
              ]
          }
      ]
  },
  plugins: [
      new webpack.BannerPlugin('版权所有，翻版必究'),
      new HtmlWebpackPlugin({
          template: __dirname + "/page/es6/tmpl/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      }),
      new webpack.HotModuleReplacementPlugin()//热加载插件
  ]

}