const express = require('express');

const projectsRouter = require('./projects/projectsRouter.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1> Node db Sprint Project server is running! </h1>`)
    })

server.use('/api/projects', projectsRouter)

module.exports = server;