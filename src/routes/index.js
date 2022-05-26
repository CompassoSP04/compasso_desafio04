const { Router } = require('express')

module.exports = (server) => {
    server.use((req, res, next) => {
        employee(server, new Router())
    })
}