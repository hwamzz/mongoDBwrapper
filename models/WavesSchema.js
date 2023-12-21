const mongo = require('mongoose')

const WavesTable = {
    UserId: Number,
    Waves: Number
}

const WavesSchema = mongo.Schema(WavesTable)

module.exports = mongo.model('waves', WavesSchema)