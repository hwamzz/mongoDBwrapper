const mongo = require('mongoose')

const DamageTable = {
    UserId: Number,
    Damage: Number
}

const DamageSchema = mongo.Schema(DamageTable)

module.exports = mongo.model('damage', DamageSchema)