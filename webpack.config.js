const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const aliasImporter = {
    findFileUrl(url) {
        if (url.startsWith('@/')) {
            return new URL(
                'file://' + path.resolve(__dirname, 'src', url.slice(2))   // cut "@/”
            );
        }
        return null;
    },
};

const sassCommon = {
    loader: 'sass-loader',
    options: {
        api: 'modern',
        implementation: require('sass'),
        sourceMap: !isProd,
        sassOptions: {
            quietDeps: true,
            silenceDeprecations: ['import'],
            includePaths: [
                path.resolve(__dirname, 'src/styles'),
                path.resolve(__dirname, 'node_modules'),
            ],
            importers: [aliasImporter],
        },
    },
};

module.exports = {
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

    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],

    devServer: {
        static: './dist',
        hot: true,
        port: 4000,
        client: { overlay: { errors: true, warnings: false } },
    },
};
