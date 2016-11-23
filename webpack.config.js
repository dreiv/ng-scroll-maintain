const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: root('dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.html']
    },
    module: {
        rules: [
            {test: /\.(html|css)$/, loader: 'raw'},
            {test: /\.ts/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']}
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src') // Location of your source code.
        )
    ],
    devtool: '#source-map'
};

// Helpers
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
