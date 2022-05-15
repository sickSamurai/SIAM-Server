const { getDataFromDB } = require('./routesDAO')
const Route = require('./route')

class RoutesSendingManager {
  constructor() {
    this.route = new Route()
  }

  updateBasicData = () => {
    this.route.name = getDataFromDB().name
    this.route.numberOfUsers = getDataFromDB().numberOfUsers
  }

  updateWaitingTime = () => {
    this.route.updateWaitingTime()
  }

  updateRouteStatus = () => {
    this.route.updateStatus()
  }

  updateRouteData = () => {
    this.updateBasicData()
    this.updateWaitingTime()
    this.updateRouteStatus()
    console.log(this.route)
    return this.route
  }
}

module.exports = RoutesSendingManager
