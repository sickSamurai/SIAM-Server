const fs = require('fs')

const databasePath = {
  win32: 'C:/SIAM-Data/routes-data.json',
  darwin: '/home/SIAM/routes-data.json'
}

const getData = () => {
  data = fs.readFileSync(databasePath[process.platform]).toString()
  return JSON.parse(data)
}

module.exports = { getData }
