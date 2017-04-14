module.exports = {
    // entry point that requires all js 
    entry: './dist/app.jsx',
    // output to bundled js files 
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    // react specific glob search for files
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        // specific path names 
        alias: {
            // Greeter: 'dist/react_components/Greeter.jsx',
            // GreeterMessage: 'dist/react_components/GreeterMessage.jsx',
            // GreeterForm: 'dist/react_components/GreeterForm.jsx'
        },
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [{
            // babel-loader transpiler 
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            // regexp 
            test: /\.jsx?$/,
            // exclude folders to parse
            exclude: /(node_modules|bower_components)/
        }]

    }
};