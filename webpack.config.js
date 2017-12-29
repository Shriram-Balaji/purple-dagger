/*
entry :
 An entry point javascript files, to build the internal dependency graph of all other modules is defined . Every other dependency is processed and then outputted as bundles
output :
 Specifies where the bundled output files are present 
 props - path, filename
loaders :
 webpack can only handle Javascript, loaders provide support for stuff like Typescript, coffeescript
devServer :
  the live reloading server
*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: ["babel-polyfill", "./app/src/index.js"],
  resolve: {
    extensions: ['.js', '.jsx','.css','.scss'],
    modules: [
      'node_modules'
    ]        
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  module: { 
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/, loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.inline.svg$/,
        exclude: /node_modules/,
        use:[      {
          loader: "babel-loader"
        },
        {
        loader: 'react-svg-loader',
        options: {
          jsx:true
        }
        }]
  
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: 5000, // most common port
    contentBase: path.resolve(__dirname, "public"),
    inline: true
  }
};
