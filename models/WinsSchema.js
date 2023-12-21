const mongo = require('mongoose')

const WinsTable = {
    UserId: Number,
    Wins: Number
}

const WinsSchema = mongo.Schema(WinsTable)

module.exports = mongo.model('wins', WinsSchema)