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
            Main: 'build/react_components/Main.jsx',
            Navigation: 'build/react_components/Nav.jsx',
            Weather: 'build/react_components/Weather.jsx',
            WeatherForm: 'build/react_components/WeatherForm.jsx',
            WeatherMessage: 'build/react_components/WeatherMessage.jsx',
            About: 'build/react_components/About.jsx',
            Examples: 'build/react_components/Examples.jsx'
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