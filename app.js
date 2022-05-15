require('dotenv').config()
const Server = require('./models/server')

const server = new Server()
server.configMiddlewares()
server.configSocket()
server.listen()
