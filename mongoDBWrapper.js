const mongo = require('mongoose')
const express = require('express')
,     bodyParser = require('body-parser')
const app = express()
// Collection Schemas
const WinsSchema = require('./models/WinsSchema')
const DamageSchema = require('./models/DamageSchema')
const HighScoreSchema = require('./models/HighScoreSchema')
const TwitterCodeSchema = require('./models/TwitterCodeSchema')
const WavesSchema = require('./models/WavesSchema')
const TowerIdSchema = require('./models/TowerIdSchema')

// Connect to DB
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING
mongo.connect(mongoConnectionString).then(() => console.log('MongoDB connected successfully.'))

class Wins {
    constructor(UserId, Wins, cache) {
        this.UserId = UserId;
        this.Wins = (Wins) ? (Wins) : (0);
        this.cache = cache;
    }

    async getWins() {
        if (this.cache) return this.cache
        try {
            const data = await WinsSchema.findOne({
                UserId: this.UserId
            })
    
            if (data) {
                this.cache = data.Wins
                return this.cache
            }
            else if (!data) {
                this.cache = 0
                return this.cache
            }
        } catch (error) {
            return error
        }
    }

    async setWins() {
        if (this.cache) {
            const updatedWins = this.cache + this.Wins
            await WinsSchema.findOneAndUpdate({ UserId: this.UserId }, { Wins: updatedWins }, { new: true })

            this.cache = updatedWins
            return "Success"
        } else {
            try {
                const data = await WinsSchema.findOne({
                    UserId: this.UserId
                })

                if (data) {
                    const oldWins = (data.Wins) ? (data.Wins) : (0)
                    const updatedWins = oldWins + this.Wins
                    await WinsSchema.findOneAndUpdate({ UserId: this.UserId }, { Wins: updatedWins }, { new: true })
    
                    this.cache = updatedWins
                    return "Success"
                } else if (!data) {
                    new WinsSchema({
                        UserId: this.UserId,
                        Wins: this.Wins
                    }).save()
    
                    this.cache = this.Wins
                    return "Success"
                }
            } catch (error) {
                return error
            }
        }
    }
}

class Damage {
    constructor(UserId, Damage, cache) {
        this.UserId = UserId;
        this.Damage = (Damage) ? (Damage) : (0);
        this.cache = cache;
    }

    async getDamage() {
        if (this.cache) return this.cache
        try {
            const data = await DamageSchema.findOne({
                UserId: this.UserId
            })
    
            if (data) {
                this.cache = data.Damage
                return this.cache
            }
            else if (!data) {
                this.cache = 0
                return this.cache
            }
        } catch (error) {
            return error
        }
    }

    async setDamage() {
        if (this.cache) {
            const updatedDamage = this.cache + this.Wins
            await DamageSchema.findOneAndUpdate({ UserId: this.UserId }, { Damage: updatedDamage }, { new: true })

            this.cache = updatedDamage
            return "Success"
        } else {
            try {
                const data = await DamageSchema.findOne({
                    UserId: this.UserId
                })

                if (data) {
                    const oldDamage = (data.Damage) ? (data.Damage) : (0)
                    const updatedDamage = oldDamage + this.Damage
                    await DamageSchema.findOneAndUpdate({ UserId: this.UserId }, { Damage: updatedDamage }, { new: true })
        
                    this.cache = updatedDamage
                    return "Success"
                } else if (!data) {
                    new DamageSchema({
                        UserId: this.UserId,
                        Damage: this.Damage
                    }).save()
    
                    this.cache = this.Damage
                    return "Success"
                }
            } catch (error) {
                return error
            }
        }
    }
}

class Score {
    constructor(UserId, Score, cache) {
        this.UserId = UserId;
        this.Score = (Score) ? (Score) : (0);
        this.cache = cache;
    }

    async getScore() {
        if (this.cache) return this.cache
        try {
            const data = await HighScoreSchema.findOne({
                UserId: this.UserId
            })
    
            if (data) {
                this.cache = data.Score
                return this.cache
            }
            else if (!data) {
                this.cache = 0
                return this.cache
            }
        } catch (error) {
            return error
        }
    }

    async setScore() {
        if (this.cache) {
            const updatedScore = this.cache + this.Wins
            await HighScoreSchema.findOneAndUpdate({ UserId: this.UserId }, { Score: updatedScore }, { new: true })
        
            this.cache = updatedScore
            return "Success"
        } else {
            try {
                const data = await HighScoreSchema.findOne({
                    UserId: this.UserId
                })

                if (data) {
                    const oldScore = (data.Score) ? (data.Score) : (0)
                    const updatedScore = oldScore + this.Score
                    await HighScoreSchema.findOneAndUpdate({ UserId: this.UserId }, { Score: updatedScore }, { new: true })
        
                    this.cache = updatedScore
                    return "Success"
                } else if (!data) {
                    new HighScoreSchema({
                        UserId: this.UserId,
                        Score: this.Score
                    }).save()
    
                    this.cache = this.Score
                    return "Success"
                }
            } catch (error) {
                return error
            }
        }
    }
}

class Waves {
    constructor(UserId, Waves, cache) {
        this.UserId = UserId;
        this.Waves = (Waves) ? (Waves) : (0);
        this.cache = cache;
    }

    async getWaves() {
        if (this.cache) return this.cache
        try {
            const data = await WavesSchema.findOne({
                UserId: this.UserId
            })
    
            if (data) {
                this.cache = data.Waves
                return this.cache
            }
            else if (!data) {
                this.cache = 0
                return this.cache
            }
        } catch (error) {
            return error
        }
    }

    async setWaves() {
        if (this.cache) {
            const updatedWaves = this.cache + this.Waves
            await WavesSchema.findOneAndUpdate({ UserId: this.UserId }, { Waves: updatedWaves }, { new: true })
        
            this.cache = updatedWaves
            return "Success"
        } else {
            try {
                const data = await WavesSchema.findOne({
                    UserId: this.UserId
                })

                if (data) {
                    const oldWaves = (data.Waves) ? (data.Waves) : (0)
                    const updatedWaves = oldWaves + this.Waves
                    await WavesSchema.findOneAndUpdate({ UserId: this.UserId }, { Waves: updatedWaves }, { new: true })
        
                    this.cache = updatedWaves
                    return "Success"
                } else if (!data) {
                    new WavesSchema({
                        UserId: this.UserId,
                        Waves: this.Waves
                    }).save()

                    this.cache = this.Waves
                    return "Success"
                }
            } catch (error) {
                return error
            }
        }
    }
}

class Code {
    constructor(Code, Remaining) {
        this.Code = Code;
        this.Remaining = Remaining;
    }

    async checkCode() {
        try {
            const data = await TwitterCodeSchema.findOne({
                Code: this.Code
            })
    
            if (data) {
                if (data.Remaining > 0) {
                    const newRemaining = data.Remaining - 1
                    await TwitterCodeSchema.findOneAndUpdate({ Code: this.Code }, { Remaining: newRemaining }, { new: true })

                    return true
                } else {
                    return false
                }
            }
            else if (!data) {
                return false
            }
        } catch (error) {
            return error
        }
    }

    async createCode() {
        try {
            const data = await WavesSchema.findOne({
                Code: this.Code
            })

            if (data) {
                return "Failure"
            } else {
                await TwitterCodeSchema.insertOne({ Code: this.Code, Remaining: this.Remaining })
                return "Success"
            }
        } catch (error) {
            return error
        }
    }
}

class Towers {
    constructor(TowerId, Skin, Type, cache) {
        this.TowerId = TowerId;
        this.Skin = Skin;
        this.Type = Type;
        this.cache = cache;
    }

    async getTower() {
        if (this.cache) return this.cache
        try {
            const data = await TowerIdSchema.findOne({
                TowerId: this.TowerId
            })
    
            if (data) {
                this.cache = [data.Skin, data.Type]
                return this.cache
            }
            else if (!data) {
                return "Not found"
            }
        } catch (error) {
            return error
        }
    }

    async setTower() {
        try {
            const data = await TowerIdSchema.findOne({
                TowerId: this.TowerId
            })

            if (data) {
                await WavesSchema.findOneAndUpdate({ TowerId: this.TowerId }, { Skin: this.Skin, Type: this.Type }, { new: true })
            } else {
                new TowerIdSchema({
                    TowerId: this.TowerId,
                    Skin: this.Skin,
                    Type: this.Type
                }).save()

                this.cache = [this.Skin, this.Type]
            }

            this.cache = [this.Skin, this.Type]
            return "Success"
        } catch (error) {
            return error
        }
    }
}