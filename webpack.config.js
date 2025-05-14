const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            '@': path.resolve(__dirname, 'src'),

            src: path.resolve(__dirname, 'src'),
        },    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
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
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'), // <-- ВАЖНО
                            sassOptions: {
                                // Скрывает предупреждения о "legacy JS API" в зависимостях
                                quietDeps: true,
                            },
                        },

                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /\.module\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src')],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: './dist',
        hot: true,
        port: 4000,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    mode: 'development',
};
