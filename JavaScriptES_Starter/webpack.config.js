module.exports = {
  entry: ['@babel/polyfill', './src/mainwp.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundlewp.js',
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}