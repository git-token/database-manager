import Promise, { join } from 'bluebird'

import createTransactionReceiptsTable from '../sql/create_transaction_receipts_table.sql'
import createContractsTable from '../sql/create_contracts_table.sql'
import createDatabase from '../sql/create_database.sql'
import useDatabase from '../sql/use_database.sql'

export default function migrations() {
  return new Promise((resolve, reject) => {
    this.query(createDatabase).then(() => {
      return this.query(useDatabase);
    }).then(() => {
      return join(
        this.query(createContractsTable),
        this.query(createTransactionReceiptsTable)
      )
    }).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}
