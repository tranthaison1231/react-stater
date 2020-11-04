const {
  override,
  fixBabelImports,
  addLessLoader,
  useBabelRc,
} = require('customize-cra');
const theme = require('./src/theme/theme.json');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@font-family': theme.fonts.primary,
      '@primary-color': theme.color.primary,
    },
  }),
  useBabelRc(),
);
