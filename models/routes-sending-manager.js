const { getData } = require('../models/routesDAO')
const Route = require('./route')

const timeToSend = 60000
const numberOfUsersToSend = 2

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
    this.route.updateStatus()
  }
}

module.exports = RoutesSendingManager
