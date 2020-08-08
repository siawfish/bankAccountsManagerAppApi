const mongoose = require('mongoose')

const schema = mongoose.Schema

var banksSchema = new schema({
    bankName:{
        type:String,
        required: true
    },
    bankAccNo:{
        type:String,
        required: true
    },
    bankBranch:{
        type:String,
        required: true
    },
    bankLocation:{
        type:String,
        required:true
    },
    accounts: [
        {
            accountId: {
                type:schema.Types.ObjectId,
                ref:'Accounts',
                required:true
            }
        }
    ]
})

var banksModel = mongoose.model('Banks', banksSchema)

module.exports = banksModel