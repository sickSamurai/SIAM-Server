const { getData } = require('../models/routesDAO')
const Route = require('./route')

const timeToSend = 900000
const numberOfUsersToSend = 70

class RoutesSendingManager {
  constructor() {
    this.route = new Route()
  }

  getDataFromDB = () => {
    const { name, numberOfUsers } = getData()
    return new Route(name, numberOfUsers)
  }

  updateWaitingTime = () => {
    this.route.updateWaitingTime()
  }

  updateRouteData = () => {
    this.route = this.getDataFromDB()
    this.updateWaitingTime()
    this.updateRouteStatus()
    return this.route
  }

  updateRouteStatus = () => {
    if (this.route.timeWaiting >= timeToSend || this.route.numbersOfUsers >= numberOfUsersToSend) {
      this.route.setReadyToGo()
      this.route.restartWaitingTime()
    } else this.route.setToWaiting()
  }
}

module.exports = RoutesSendingManager
