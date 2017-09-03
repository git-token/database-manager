'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = migrations;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../sql/create_transaction_receipts.sql' */var createTransactionReceipts = 'CREATE TABLE IF NOT EXISTS transaction_receipts (\n\tcontract_address CHARACTER(42),\n\ttransaction_hash CHARACTER(66),\n\tcumulative_gas_used INTEGER,\n\tblock_hash CHARACTER(66),\n\tblock_number INTEGER,\n\tgas_used INTEGER\n);\n';
/* babel-plugin-inline-import '../sql/create_gittoken_contracts.sql' */var createGitTokenContracts = 'CREATE TABLE IF NOT EXISTS gittoken_contracts (\n  address CHARACTER(42),\n  date_deployed BIGINT NOT NULL DEFAULT 0,\n  decimals INTEGER,\n  organization TEXT,\n  symbol TEXT,\n  name TEXT\n);\n';
/* babel-plugin-inline-import '../sql/create_git_token_database.sql' */var createDatabase = 'CREATE DATABASE IF NOT EXISTS git_token;\n';
/* babel-plugin-inline-import '../sql/use_git_token.sql' */var useDatabase = 'USE git_token;\n';
function migrations() {
  var _this = this;

  return new _bluebird2.default(function (resolve, reject) {
    _this.query(createDatabase).then(function () {
      return _this.query(useDatabase);
    }).then(function () {
      return (0, _bluebird.join)(_this.query(createGitTokenContracts), _this.query(createTransactionReceipts));
    }).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      reject(error);
    });
  });
}