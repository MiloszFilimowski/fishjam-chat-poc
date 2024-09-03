const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Example of modifying the default configuration:
// For instance, add SVG support by replacing certain asset extensions and source extensions
const newSourceExts = ['svg', ...config.resolver.sourceExts];
const newAssetExts = config.resolver.assetExts.filter(ext => ext !== 'svg') // remove 'svg' if it's listed as an asset

config.resolver.sourceExts = newSourceExts;
config.resolver.assetExts = newAssetExts;

module.exports = config;
