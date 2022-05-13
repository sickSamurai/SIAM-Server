const express = require('express')
const http = require('http')
const cors = require('cors')

const socketController = require('../controllers/socket-controller')

class Server {
  constructor() {
    this.port = process.env.PORT
    this.expressApp = express()
    this.server = http.createServer(this.expressApp)
    this.io = require('socket.io')(this.server)
  }

  configSocket() {
    io.on('connection', socketController)
  }

  configMiddlewares() {
    /*habilitar cors*/
    this.expressApp.use(cors())

    /*Servir web app ubicada en public*/
    this.expressApp.use(express.static('public'))
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Escuchando peticiones en puerto ${this.port}`)
    })
  }
}

module.exports = Server
