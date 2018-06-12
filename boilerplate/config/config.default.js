'use strict';
const nuxtConfig = require('../nuxt.config');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // nuxt config
  config.nuxtConfig = nuxtConfig;

  // pretty config
  config.pretty = {
    i18n: false,
    defaultErrno: 1000,
    errnoField: 'errno',
    errmsgField: 'errmsg'
  };

  // add your config here
  config.middleware = [ 'nuxt' ];

  return config;
};
