import mysql from 'mysql'
import migrations from './migrations'
import query from './query'

export default class GitTokenDatabaseManager {
  constructor({
    mysqlHost,
    mysqlUser,
    mysqlRootPassword,
    mysqlDatabase,
  }) {
    this.migrations = migrations.bind(this)
    this.query = query.bind(this)

    // Instantiate MySql Connection
    this.mysql = mysql.createConnection({
      host: mysqlHost,
      user: mysqlUser,
      password: mysqlRootPassword,
      // database: mysqlDatabase,
    })

    this.mysql.connect(() => {
      this.migrations().then((migrated) => {
        console.log('migrated', migrated)
      }).catch((error) => {
        console.log('error', error)
      })
    })
  }
}
