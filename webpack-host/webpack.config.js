const path = require('path');
const webpack = require('webpack');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),  
      new ModuleFederationPlugin({
      name: 'root',
      library: { type: 'var', name: 'root' },
      filename: 'rootRemoteEntry.js',
      remotes: { 'vite-mf': '"http://localhost:3005/remoteEntry.js"' },
    })
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
