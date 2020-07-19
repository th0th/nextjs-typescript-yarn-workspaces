const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@project/components',
]);

module.exports = withPlugins([
  withTM,
]);
