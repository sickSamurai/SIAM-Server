const fs = require('fs')
const os = require('os')
const path = require('path')

const databasePath = path.join(`${os.homedir()}`, 'SIAM', 'routes-data.json')

const getDataFromDB = () => {
  data = fs.readFileSync(databasePath).toString()
  return JSON.parse(data)
}

module.exports = { getDataFromDB }
