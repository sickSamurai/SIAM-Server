const { Socket } = require('socket.io')
const RoutesSendingManager = require('../models/routes-sending-manager')

const intervalTime = 30000

const socketController = (socket = new Socket()) => {
  const routesManager = new RoutesSendingManager()
  const interval = setInterval(() => {
    socket.emit('sending-data', routesManager.evalueData())
  }, intervalTime)

  socket.on('connection', () => interval())
  socket.on('disconnection', () => clearInterval(interval))
}

module.exports = socketController
