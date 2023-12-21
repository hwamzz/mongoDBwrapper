const mongo = require('mongoose')

const TowersTable = {
    Id: Number,
    Skin: String,
    Type: String
}

const TowersSchema = mongo.Schema(TowersTable)

module.exports = mongo.model('tower_ids', TowersSchema)