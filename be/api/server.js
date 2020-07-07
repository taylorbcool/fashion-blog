const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const logger = require('./middleware/logger')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(logger)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'server up and running' })
})

server.get('/api', (req, res) => {
  res.status(200).json({ message: 'server up and running' })
})

module.exports = server