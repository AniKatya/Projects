const express = require('express')
const router = express.Router()
const Expense = require("../model/Expense.js")
const moment = require("moment")


router.get('/expenses', function(req,res){
   Expense.find({}).sort({date:-1}).exec(function(err,data){
            res.send(data)
})
})

router.post('/new',function(req,res){
    const newExpense = new Expense({
        name: req.body.name,
        amount: req.body.amount,
        group: req.body.group,
        date: req.body.date ? moment(req.body.date).format ('LLLL') : moment('2018-08-19').format('LLLL')
    })
    newExpense.save()
    console.log(`${newExpense.name} spent ${newExpense.amount} on ${newExpense.group}.`)
})

router.put('/update', function(req,res){
    let group1 = req.body.group1
    let group2 = req.body.group2
    Expense.find({group:group1})
           .updateMany({group:group2})
           .exec(function(err,expenses){
            console.log(expenses)
    })
})


module.exports = router