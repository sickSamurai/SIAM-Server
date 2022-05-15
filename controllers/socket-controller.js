const { Socket } = require('socket.io')
const RoutesSendingManager = require('../models/routes-manager')

const intervalTime = 15000

const socketController = (socket = new Socket()) => {
  const routesManager = new RoutesSendingManager()
  let interval

  socket.on('connection', () => {
    interval = setInterval(() => {
      socket.emit('sending-data', routesManager.updateRouteData())
    }, intervalTime)
  })

  socket.on('disconnection', () => clearInterval(interval))
}

module.exports = socketController
