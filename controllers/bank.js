const banksModel = require('../models/bank')
const accountsModel = require('../models/account')

const fetchBanksController = (req, res) => {
    const { id } = req.params
    !id ? 
    banksModel.find().then((banks)=>{
        res.json({banks})
    }).catch((err)=>console.log(err)) :
    banksModel.findById(id).then((bank)=>{
        res.json({bank})
    }).catch((err)=>console.log(err))
}

const updateBanksController = (req, res) => {
    const {id, bankName, bankBranch, bankAccNo, bankLocation} = req.body
    banksModel.findById(id).then((bank)=>{
        if(bank){
            bank.bankName=bankName
            bank.bankBranch=bankBranch
            bank.bankAccNo=bankAccNo
            bank.bankLocation=bankLocation
            bank.numbPages=numbPages

            bank.save()
            .then((bank)=>{
                res.json({message:'Updated Successfully', bank})
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

const createBanksController = (req, res) => {
    const {id, bankName, bankBranch, bankAccNo, bankLocation} = req.body
    const bank = new booksModel({id, bankName, bankBranch, bankAccNo, bankLocation})
    bank.save()
    .then((bank)=>{
        res.json({ message:'Created Successfully', bank })
    })
    .catch((err)=>{
        console.log(err)
    })
}

const deleteBanksController = (req, res) => {
    const {id} = req.body
    banksModel.findByIdAndDelete(id)
    .then((deletedBank)=>{
        accountsModel.deleteMany({bankId:deletedBank.id}).then((res)=>{
            res.json({message:'Deleted Succesfully', deletedBank})
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = { fetchBanksController, updateBanksController, createBanksController, deleteBanksController }