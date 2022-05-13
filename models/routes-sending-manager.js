class RoutesSendingManager {
  evalueData = () => {
    return {
      routeName: '',
      numberOfUser: 0,
      timeWaiting: 0,
      isReady: numberOfUser > 100 || timeWaiting > 15
    }
  }
}

module.exports = RoutesSendingManager
