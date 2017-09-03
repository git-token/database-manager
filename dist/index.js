'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _migrations = require('./migrations');

var _migrations2 = _interopRequireDefault(_migrations);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenDatabaseManager = function GitTokenDatabaseManager(_ref) {
  var _this = this;

  var mysqlHost = _ref.mysqlHost;
  var mysqlUser = _ref.mysqlUser;
  var mysqlRootPassword = _ref.mysqlRootPassword;
  var mysqlDatabase = _ref.mysqlDatabase;
  (0, _classCallCheck3.default)(this, GitTokenDatabaseManager);

  this.migrations = _migrations2.default.bind(this);
  this.query = _query2.default.bind(this

  // Instantiate MySql Connection
  );this.mysql = _mysql2.default.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlRootPassword
    // database: mysqlDatabase,
  });

  this.mysql.connect(function () {
    _this.migrations().then(function (migrated) {
      console.log('migrated', migrated);
    }).catch(function (error) {
      console.log('error', error);
    });
  });
};

exports.default = GitTokenDatabaseManager;