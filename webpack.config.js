const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
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
            '@':  path.resolve(__dirname, 'src'),
            src: path.resolve(__dirname, 'src'),
        },
    },

    module: {
        rules: [
            { test: /\.svg$/, use: ['@svgr/webpack'] },

            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.module\.s[ac]ss$/,
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
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: { quietDeps: true },
                            sourceMap: !isProd,
                        },
                    },
                ],
            },

            {
                test: /\.s[ac]ss$/,
                exclude: /\.module\.s[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: !isProd },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: { includePaths: [path.resolve(__dirname, 'src')] },
                            sourceMap: !isProd,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],

    devServer: {
        static: './dist',
        hot: true,
        port: 4000,
        client: { overlay: { errors: true, warnings: false } },
    },

    mode: isProd ? 'production' : 'development',
};
