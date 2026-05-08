const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const aliasImporter = {
  findFileUrl(url) {
    if (url.startsWith('@/')) {
      return new URL(`file://${path.resolve(__dirname, 'src', url.slice(2))}`);
    }
    return null;
  },
};

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';

  const sassCommon = {
    loader: 'sass-loader',
    options: {
      api: 'modern',
      implementation: require('sass'),
      sourceMap: !isProd,
      sassOptions: {
        quietDeps: true,
        includePaths: [path.resolve(__dirname, 'src/styles')],
        importers: [aliasImporter],
      },
    },
  };

  return {
    mode: isProd ? 'production' : 'development',
    stats: 'errors-only',

    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },

        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isProd
                    ? '[hash:base64:6]'
                    : '[path][name]__[local]--[hash:base64:5]',
                },
                sourceMap: !isProd,
              },
            },
            sassCommon,
          ],
        },

        {
          test: /\.s[ac]ss$/i,
          exclude: /\.module\.s[ac]ss$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { sourceMap: !isProd } },
            sassCommon,
          ],
        },
      ],
    },

    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

    devServer: {
      static: './dist',
      hot: true,
      port: 4000,
      client: { overlay: { errors: true, warnings: false } },
    },
  };
};
