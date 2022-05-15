const { performance } = require('perf_hooks')
const numberOfUsersToSend = 2
const timeToSend = 60

class Route {
  constructor(name = '', numberOfUsers = 0) {
    this.name = name
    this.numberOfUsers = numberOfUsers
    this.startTime = performance.now()
    this.timeWaiting = 0
    this.isReady = false
  }

  updateWaitingTime() {
    this.timeWaiting = (performance.now() - this.startTime)/1000
  }

  restartWaitingTime() {
    this.startTime = performance.now()
    this.timeWaiting = 0
  }

  updateStatus() {
    this.isReady = this.numberOfUsers >= numberOfUsersToSend || this.timeWaiting >= timeToSend
    if (this.isReady) this.restartWaitingTime()
  }
}

module.exports = Route
