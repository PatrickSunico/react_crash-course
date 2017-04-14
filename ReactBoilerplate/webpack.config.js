module.exports = {
    // entry point that requires all js 
    entry: './build/app.jsx',
    // output to bundled js files 
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    // react specific glob search for files
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        // specific path names 
        alias: {
            // Example
            // Greeter: 'build/react_components/Greeter.jsx',
            // GreeterMessage: 'build/react_components/GreeterMessage.jsx',
            // GreeterForm: 'build/react_components/GreeterForm.jsx'
        },
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [{
            // babel-loader transpiler 
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            // regexp 
            test: /\.jsx?$/,
            // exclude folders to parse
            exclude: /(node_modules|bower_components)/
        }]

    }
};