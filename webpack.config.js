module.exports = {
    entry: 'E:/JS/simpleReact/src/client/index.js',
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                    loader: 'babel-loader',
                    }
                ],
                exclude: /node_moudles/,
            }
        ]
    }
}