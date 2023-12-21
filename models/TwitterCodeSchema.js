const mongo = require('mongoose')

const TwitterCodeTable = {
    Code: String,
    Remaining: Number
}

const TwitterCodeSchema = mongo.Schema(TwitterCodeTable)

module.exports = mongo.model('twitter-codes', TwitterCodeSchema)