'use strict';


module.exports = {
    // entry point that requires all js 
    entry: './dist/react-components/app.jsx',
    // entry: './dist/app.js',
    // output to bundled js files 
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    // react specific glob search for files
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {

        loaders: [{
            // babel-loader transpiler 
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            // regexp 
            test: /\.jsx?$/,
            // exclude folders to parse
            exclude: /(node_modules|bower_components)/,

            // CSS/SASS Loaders
            rules: [
                { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
            ]
        }]

    }
};