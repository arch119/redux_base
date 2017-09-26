const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: './src/tutorial/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [new HtmlWebpackPlugin(), new CheckerPlugin()],
  module:{
  	rules : [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.tsx?$/,
         use: 'awesome-typescript-loader',
         exclude: /node_modules/ 
       },
       {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: [ 'react', 'es2015', 'stage-2'] },
        }]
       }
  	]
  }
};