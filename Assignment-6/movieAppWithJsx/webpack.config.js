const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + "/dist",
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {"test": /\.js$/, "loader": "babel-loader", "exclude": /node_modules/},
            {"test": /.html/, "loader": "raw-loader", "exclude": /node_modules/},
            {"test": /\.css$/, "use": ['style-loader', 'css-loader']}
        ]
    },
    "plugins": [new HTMLWebPackPlugin({
        "template": "./public/index.html"
    })],
    "mode": "development"
};
