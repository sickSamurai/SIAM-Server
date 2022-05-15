const { is } = require('express/lib/request')
const { performance } = require('perf_hooks')
class Route {
  constructor(name = '', numbersOfUsers = 0) {
    this.name = name
    this.numbersOfUsers = numbersOfUsers
    this.timeWaiting = 0
    this.startTime = performance.now()
    this.isReadyToGo = false
  }

  updateWaitingTime() {
    this.timeWaiting = performance.now() - this.startTime
  }

  restartWaitingTime() {
    this.startTime = performance.now()
    this.timeWaiting = 0
  }

  setToWaiting() {
    this.isReadyToGo = false
  }

  setReadyToGo() {
    this.routeData = true
  }
}

module.exports = Route
