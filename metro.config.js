const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname, {
    mode: 'exotic',
});

config.transformer.babelTransformerPath = require.resolve("./transformer.js");
config.resolver.sourceExts = [...config.resolver.sourceExts, "scss", "sass"];

module.exports = config;
