const fs = require('fs')

const paths = {
  win32: 'C:/SIAM-Data/routes-data.json',
  darwin: '~/SIAM/routes-data.json',
  linux: '~/SIAM/routes-data.json'
}

const databasePath = paths[process.platform]

const getData = () => {
  data = fs.readFileSync(databasePath).toString()
  return JSON.parse(data)
}

module.exports = { getData }
