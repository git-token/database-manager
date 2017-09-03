'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = query;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function query(queryString) {
  var _this = this;

  return new _bluebird2.default(function (resolve, reject) {
    _this.mysql.query(queryString, function (error, result) {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
}