const express = require('express')

module.exports = function(server) {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //Device routes
    const deviceService = require('../api/device/deviceService')
    deviceService.register(router, '/devices')
}