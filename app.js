require('dotenv').config()
const RoutesSendingManager = require('./models/routes-sending-manager')

const Server = require('./models/server')
const server = new Server()
server.configMiddlewares()
server.configSocket()
server.listen()

const routeSender = new RoutesSendingManager()
routeSender.updateRouteData()
