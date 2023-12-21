const mongo = require('mongoose')

const HighScoreTable = {
    UserId: Number,
    Score: Number
}

const HighScoreSchema = mongo.Schema(HighScoreTable)

module.exports = mongo.model('high_score', HighScoreSchema)