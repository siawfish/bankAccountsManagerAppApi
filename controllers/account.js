const accountsModel = require('../models/account')

const createAccountsController = (req, res) => {
    const { name, acctype, accNo, bankId } = req.body

    const account = new accountsModel({ name, acctype, accNo, bankId })

    account.save().then((result)=>{
        if(result){
            res.json({
                message:"Account successfully created",
                result
            })
        } else {
            res.json({
                message:"No response after saving account"
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })

}

const fetchAccountsController = (req, res) => {
    const { id } = req.params
    !id ? 
    accountsModel.find()
    .populate("bankId")
    .then((banks)=>{
        res.json({banks})
    }).catch((err)=>console.log(err)) :
    accountsModel.findById(id).then((banks)=>{
        res.json({banks})
    }).catch((err)=>console.log(err))
}

module.exports = { fetchAccountsController, createAccountsController }