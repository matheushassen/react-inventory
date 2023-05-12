const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const deviceSchema = new mongoose.Schema({
    hostname: {type: String, required: false},
    serial: {type: String, required: false},
    bp: {type: String, required: false},
    room: {type: String, required: true},
})

module.exports = restful.model('Device', deviceSchema)