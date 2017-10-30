module.exports = {
		
  devtool: 'cheap-module-eval-source-map',
		
  entry:  __dirname + "/page/normal/js/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/page/normal/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  
  devServer: {
	  contentBase: "./page/normal",
	  historyApiFallback: true,
	  inline: true
  }
}