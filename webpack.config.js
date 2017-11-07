var path = require( 'path' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry : {
        'babel' : 'babel-polyfill',
        'main' : './src/App.js'
    },
    output : {
        filename : '[name].bundle.js',
        path : path.resolve( 'dist' )
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loaders : [ 'babel-loader' ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin( {
            title : 'Splitting',
            filename : 'index.html',
            template : path.join( __dirname, 'src', 'index.html' ),
            inject : 'body'
        } )
    ]
};
