// Node Modules Imports
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')


// Internal Modules Imports
const api = require('./server/routes/api')
let Expense = require("./server/model/Expense.js")
let data = require("./expensesData.json")

// Connecting to Mongo Database
mongoose.connect('mongodb://localhost/expenses-project', { useNewUrlParser: true })

// Setting up express, serving client files, configuring bodyParser
const app = express()
// app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Connecting to "api", i.e our routes
app.use('/', api)

// Running the server
const port = 3000
app.listen(port, function () { console.log('Running on ' + port) })


// Create Collections - commented out to avoid duplicating

// data.forEach(d => {
//       const index = new Expense({
//       amount: d.amount,
//       group: d.group,
//       date: d.date,
//       name: d.item
//     })
//     index.save()
// })

