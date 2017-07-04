var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');


const path = require('path');
module.exports = [{
    context: __dirname,
     entry: {
        server_bundle: './src/app/ServerEntry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'server-bundle.js'
    },
    externals: [nodeExternals({modulesFromFile:true})],

    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader']
            })
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ],
        alias: {
            'react' : path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
            'react-dom' : path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js'),
            'react-dom/server': path.resolve('react-dom/dist/react-dom-server.min.js')
        }           

    }
}, {
    entry: {
        client_bundle: './src/app/ClientEntry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'client-bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),

    ],
 module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader']
            })
        }]
    },    
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ],
        alias: {
            'react' : path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
            'react-dom' : path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js')
        }        
    }
}];
