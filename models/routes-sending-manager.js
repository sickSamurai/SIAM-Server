const fs = require('fs')
const path = require('path')
const { performance } = require('perf_hooks')
const databasePath = '../database/routes-data.json'

const timeToSend = 900000
const numbersOfUsersToSend = 70

class RoutesSendingManager {
  constructor() {
    this.startTime = performance.now()
    this.routeData = this.getData()
  }

  getData = () => JSON.parse(fs.readFileSync(path.join(__dirname, databasePath)).toString())

  setTime = () => {
    this.routeData.time = performance.now() - this.startTime
  }

  evalueData = () => {
    this.routeData = this.getData()
    this.setTime()
    this.determineIfSend()
    return this.routeData
  }

  determineIfSend = () => {
    if (this.routeData.time >= timeToSend || this.routeData.numbersOfUsers >= numbersOfUsersToSend) {
      this.routeData.readyToGo = true
      this.routeData.startTime = 0
    } else this.routeData.readyToGo = false
  }
}

module.exports = RoutesSendingManager
