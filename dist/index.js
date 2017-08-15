'use strict';

var _loaderUtils = require('loader-utils');

module.exports = function (content) {
  var callback = this.async();

  var query = this.resourceQuery ? (0, _loaderUtils.parseQuery)(this.resourceQuery) : {};

  require('properties').parse(content, query, function (err, obj) {
    if (err) {
      return console.error(err);
    }
    callback(null, 'module.exports = ' + JSON.stringify(obj) + ';');
  });
};