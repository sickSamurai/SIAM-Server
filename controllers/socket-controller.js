const evalueData = require('../models/dbAccess')
const intervalTime = 30000
const { Socket } = require('socket.io')

const socketController = (socket = Socket()) => {
  const interval = setInterval(() => {
    socket.emit('sending-data', evalueData())
  }, intervalTime)

  socket.on('connection', () => interval())
  socket.on('disconnection', () => clearInterval(interval))
}

module.exports = socketController
