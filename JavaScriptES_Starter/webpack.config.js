module.exports = {
  entry: './mainwp.js',
  output: {
    path: __dirname,
    filename: 'bundlewp.js'
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