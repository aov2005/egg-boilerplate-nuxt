'use strict';
const { Nuxt, Builder } = require('nuxt');

module.exports = (options, app) => {
  app.nuxt = new Nuxt(app.config.nuxtConfig);
  if (app.config.nuxtConfig.dev) {
    const builder = new Builder(app.nuxt);
    builder.build();
  }

  let flag = false;
  let routerArr = [];
  return async (ctx, next) => {
    if (!flag) {
      routerArr = app.router.stack.map(el => el.path);
      flag = true;
    }
    if (routerArr.some(el => el === ctx.path)) {
      return await next();
    }
    await next;
    const { res, req } = ctx;

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      app.nuxt.render(req, res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  };
};
