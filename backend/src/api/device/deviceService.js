const Device = require('./device')

Device.methods(['get', 'post', 'put', 'delete'])
Device.updateOptions({ new: true, runValidators: true })

module.exports = Device