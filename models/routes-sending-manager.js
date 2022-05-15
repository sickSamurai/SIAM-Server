const fs = require('fs')
const path = require('path')
const { performance } = require('perf_hooks')
const RouteData = require('./route-data')
const databasePath = '../database/routes-data.json'

const timeToSend = 900000
const numberOfUsersToSend = 70

class RoutesSendingManager {
  constructor() {
    this.startTime = performance.now()
    this.routeData = new RouteData()
  }

  getData = () => JSON.parse(fs.readFileSync(path.join(__dirname, databasePath)).toString())

  setTime = () => {
    this.routeData.time = performance.now() - this.startTime
  }

  updateRouteData = () => {
    this.routeData = this.getData()
    this.setTime()
    this.determineIfSendRoute()
    return this.routeData
  }

  determineIfSendRoute = () => {
    if (this.routeData.time >= timeToSend 
      || this.routeData.numberOfUsers >= numberOfUsersToSend) {
      this.routeData.readyToGo = true
      this.routeData.startTime = 0
    } else this.routeData.readyToGo = false
  }
}

module.exports = RoutesSendingManager
