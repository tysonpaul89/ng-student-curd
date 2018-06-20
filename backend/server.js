const express = require('express')
const Nedb = require('nedb')
const bodyParser = require('body-parser')
const studentController = require('./student.controller')

// Create a new express application instance
const app = express()

// The port the express app will listen on
const port = 3300

// Database connection
const db = new Nedb({filename: './db/student.db', autoload: true})
app.locals.db = db

// Removes all data
// db.remove({}, { multi: true }, function (err, numRemoved) {
// });

// nedb - Insert example
// const insertData = [
//   {id: 1, name: 'Tyson', age: 28, dob: '1989-07-20'},
//   {id: 2, name: 'Seethu', age: 28, dob: '1989-09-14'},
//   {id: 3, name: 'Jack', age: 26, dob: '1989-02-20'},
//   {id: 4, name: 'Jack', age: 25, dob: '1990-06-12'}
// ];
// db.insert(insertData, (err, newDoc) => console.log(newDoc));

// nedb - Querying examples
// To get all document
// db.find({age: 28}, (err: Error, doc: object) => console.log('find: ', doc));

// To get jus one document
// db.findOne({id: 1}, (err: Error, doc: object) => console.log('findOne: ', doc));

// To get all document with single node
// This is equivalent to query 'select name from student'
// db.find({age: 28}, {name: 1}, (err: Error, doc: object) => console.log('With Projection', doc));

// Configuring packages
app.use(bodyParser.json())

// Routing
app.use('/', studentController)

app.listen(port, function () {
  console.log('Listening at http://localhost:' + port + '/')
})
