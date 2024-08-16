const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#ff6347",
              "@seconday-color": "#212529",
              "@text-color": "#212529",
              "@text-secondary-color": "#00000080",
              "@font-family": "Poppins",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};