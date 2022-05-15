const fs = require('fs')
const { performance } = require('perf_hooks')
const Route = require('./route')
const databasePath = 'C:/SIAM-Data/routes-data.json'

const timeToSend = 900000
const numbersOfUsersToSend = 70

class RoutesSendingManager {
  constructor() {
    this.route = new Route()
  }

  getDataFromDB = () => {
    const { name, numbersOfUsers } = JSON.parse(fs.readFileSync(databasePath).toString())
    return new Route(name, numbersOfUsers)
  }

  updateWaitingTime = () => {
    this.route.updateWaitingTime()
  }

  updateRouteData = () => {
    this.route = this.getDataFromDB()
    this.updateWaitingTime()
    this.determineIfSend()
    return this.route
  }

  determineIfSend = () => {
    if (this.route.timeWaiting >= timeToSend || this.route.numbersOfUsers >= numbersOfUsersToSend) {
      this.route.setReadyToGo()
      this.route.restartWaitingTime()
    } else this.route.setToWaiting()
  }
}

module.exports = RoutesSendingManager
