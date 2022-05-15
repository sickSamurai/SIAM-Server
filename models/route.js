const { performance } = require('perf_hooks')

class Route {
  constructor(name = '', numberOfUsers = 0) {
    this.name = name
    this.numberOfUsers = numberOfUsers
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
