const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'rsoi-js'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rsoi-js-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'rsoi-js'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rsoi-js-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'rsoi-js'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rsoi-js-production'
  }
};

module.exports = config[env];
