const { Socket } = require('socket.io')
const RoutesSendingManager = require('../models/routes-sending-manager')

const intervalTime = 30000

const socketController = (socket = new Socket()) => {
  const routesManager = new RoutesSendingManager()
  let interval

  socket.on('connection', () => {
    interval = setInterval(() => {
      socket.emit('sending-data', routesManager.evalueData())
      console.log(routesManager.evalueData())
    }, intervalTime)
  })
  socket.on('disconnection', () => clearInterval(interval))
}

module.exports = socketController
