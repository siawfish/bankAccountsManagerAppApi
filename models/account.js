const mongoose = require('mongoose')

const schema = mongoose.Schema

var accountsSchema = new schema({
    name:{
        type:String,
        required: true
    },
    acctype:{
        type:String,
        required: true
    },
    accNo:{
        type:String,
        required: true
    },
    bankId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bank',
        required:true
    }
})

var accountsModel = mongoose.model('Accounts', accountsSchema)

module.exports = accountsModel