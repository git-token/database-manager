import Promise, { join } from 'bluebird'

import createTransactionReceipts from '../sql/create_transaction_receipts.sql'
import createGitTokenContracts from '../sql/create_gittoken_contracts.sql'
import createDatabase from '../sql/create_git_token_database.sql'
import useDatabase from '../sql/use_git_token.sql'

export default function migrations() {
  return new Promise((resolve, reject) => {
    this.query(createDatabase).then(() => {
      return this.query(useDatabase);
    }).then(() => {
      return join(
        this.query(createGitTokenContracts),
        this.query(createTransactionReceipts)
      )
    }).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}
