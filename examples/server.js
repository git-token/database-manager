const GitTokenDatabaseManager = require('../dist/index').default
const config = require('../config')

const db = new GitTokenDatabaseManager(config)
