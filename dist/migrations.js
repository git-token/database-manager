'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = migrations;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../sql/create_transaction_receipts.sql' */var createTransactionReceipts = 'CREATE TABLE IF NOT EXISTS transaction_receipts (\n  contract_address    CHARACTER(42),\n  transaction_hash    CHARACTER(66) PRIMARY KEY,\n  cumulative_gas_used INTEGER,\n  block_hash          CHARACTER(66),\n  block_number        INTEGER,\n  gas_used            INTEGER,\n  organization        CHARACTER(39)\n);\n';
/* babel-plugin-inline-import '../sql/create_gittoken_contracts.sql' */var createGitTokenContracts = 'CREATE TABLE IF NOT EXISTS gittoken_contracts (\n  address       CHARACTER(42),\n  date_deployed BIGINT NOT NULL DEFAULT 0,\n  decimals      INTEGER,\n  organization  CHARACTER(39),\n  symbol        TEXT,\n  name          TEXT\n);\n';
/* babel-plugin-inline-import '../sql/create_registry.sql' */var createRegistry = 'CREATE TABLE IF NOT EXISTS registry (\n  admin_username   TEXT,\n  admin_address    CHARACTER(42),\n  admin_email      TEXT,\n  organization     CHARACTER(39) PRIMARY KEY,\n  name             TEXT,\n  symbol           TEXT,\n  decimals         INTEGER,\n  deployed         BOOLEAN,\n  token_address    CHARACTER(42),\n  date_registered  BIGINT NOT NULL DEFAULT 0,\n  date_deployed    BIGINT NOT NULL DEFAULT 0\n);\n';
/* babel-plugin-inline-import '../sql/create_webhook.sql' */var createWebhook = 'CREATE TABLE IF NOT EXISTS webhook (\n  delivery_id      CHARACTER(36) PRIMARY KEY,\n  event            TEXT,\n  action           TEXT,\n  organization     CHARACTER(39),\n  contributor      TEXT,\n  date_received    BIGINT NOT NULL DEFAULT 0\n);\n';
/* babel-plugin-inline-import '../sql/create_git_token_database.sql' */var createDatabase = 'CREATE DATABASE IF NOT EXISTS git_token;\n';
/* babel-plugin-inline-import '../sql/use_git_token.sql' */var useDatabase = 'USE git_token;\n';
function migrations() {
  var _this = this;

  return new _bluebird2.default(function (resolve, reject) {
    _this.query(createDatabase).then(function () {
      return _this.query(useDatabase);
    }).then(function () {
      return (0, _bluebird.join)(_this.query(createGitTokenContracts), _this.query(createTransactionReceipts), _this.query(createRegistry), _this.query(createWebhook));
    }).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      reject(error);
    });
  });
}