const path = require('path');

module.exports = {
  entry: '/js/main.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, './docs/js'), // Directory for the output file
  },
  mode: 'production', // Set mode to 'production' for minification
                      // Set to developer otherwise
};
