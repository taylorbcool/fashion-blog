const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const usersRouter = require('./users/UserRouter.js')
const logger = require('./middleware/logger')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(logger)

// Configure bodyparser
var bp = require('body-parser');
server.use(bp.urlencoded({extended: true}));
server.use(bp.json());

const { swaggerRouter, getSwagger } = require('./swagger/swaggerRouter');
server.use('/', swaggerRouter);
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'server up and running' })
})

server.get('/api', (req, res) => {
  res.status(200).json({ message: 'server up and running' })
})

module.exports = server