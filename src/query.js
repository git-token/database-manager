import Promise, { join } from 'bluebird'

export default function query(queryString) {
  return new Promise((resolve, reject) => {
    this.mysql.query(queryString, (error, result) => {
      if (error) { reject(error) }
      resolve(result)
    })
  })
}
