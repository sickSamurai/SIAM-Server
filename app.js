require('dotenv').config()
const RoutesSendingManager = require('./models/routes-sending-manager')
const Server = require('./models/server')

const server = new Server()
server.configMiddlewares()
server.listen()
const routes = new RoutesSendingManager()

setInterval(() => console.log(routes.evalueData()), 3000)