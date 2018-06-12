const { isArray, isNumber, isObject } = require('util');

module.exports = {
  success(data, message = '') {
    const { response: res, app } = this;
    const config = app.config.pretty;
    res.status = 200;
    res.type = 'application/json';

    message = message || 'success';

    res.body = {
      [config.errnoField]: 0,
      [config.errmsgField]: message,
      data,
    };
  },
  fail(errno, errmsg = '', data) {
    const { response: res, app } = this;
    const config = app.config.pretty;
    let obj;
    if (isObject(errno)) {
      obj = errno;
    } else {
      if (/^[A-Z_]+$/.test(errno)) {
        const messages = {};
        const msg = messages[errno];
        if (isArray(msg)) {
          [ errno, errmsg ] = msg;
        }
      }
      if (!isNumber(errno)) {
        [ data, errmsg, errno ] = [ errmsg, errno, config.defaultErrno || 1000 ];
      }
      obj = {
        [config.errnoField]: errno,
        [config.errmsgField]: errmsg || '',
      };
      if (data) {
        obj.data = data;
      }
    }
    res.status = 200;
    res.type = 'application/json';
    res.body = obj;
  },
};
