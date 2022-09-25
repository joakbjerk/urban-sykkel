const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, './src');
const jsPath = path.resolve(srcPath, './js');
const uiPath = path.resolve(jsPath, './ui');
const scssPath = path.resolve(srcPath, './scss');
const assetsPath = path.resolve(srcPath, './assets');
const distPath = path.resolve(__dirname, './dist');

module.exports = (env) => ({
  entry: path.resolve(srcPath, 'App.tsx'),
  output: {
    path: distPath,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  mode: env.mode,
  target: 'web',
  devtool: env.mode === 'development' ? 'eval-source-map' : false,
  resolve: {
    alias: {
      '@components': path.resolve(uiPath, 'components/'),
      '@pages': path.resolve(uiPath, 'pages/'),
      '@landmarks': path.resolve(uiPath, 'landmarks/'),
      '@interfaces': path.resolve(jsPath, 'interfaces/'),
      '@constants': path.resolve(jsPath, 'constants/'),
      '@context': path.resolve(jsPath, 'context/'),
      '@hooks': path.resolve(jsPath, 'hooks/'),
      '@reducers': path.resolve(jsPath, 'reducers/'),
      '@routing': path.resolve(jsPath, 'routing/'),
      '@utils': path.resolve(jsPath, 'utils/'),
      '@data': path.resolve(jsPath, 'data/'),
      '@scss': path.resolve(scssPath),
      '@scss-variables': path.resolve(scssPath, 'variables/'),
      '@scss-mixins': path.resolve(scssPath, 'mixins/'),
      '@assets': path.resolve(assetsPath),
      '@images': path.resolve(assetsPath, 'images'),
      '@fonts': path.resolve(assetsPath, 'fonts'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, './index.html'),
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { esModule: false } }, 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[folder]/[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/assets',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    static: distPath,
    historyApiFallback: true,
    port: '8080',
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
