const { override, fixBabelImports, addWebpackResolve, addWebpackAlias } = require('customize-cra');
const path = require("path")

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',     
        style: 'css',
    }),
    addWebpackResolve({
        extensions: [".js",".json",".jsx"]
    }),
    addWebpackAlias({
        "@": path.resolve(__dirname,"./src"),
        "@a": path.resolve(__dirname,"./src/assets"),
        "@u": path.resolve(__dirname,"./src/utils"),
        "@c": path.resolve(__dirname,"./src/components"),
    })
);