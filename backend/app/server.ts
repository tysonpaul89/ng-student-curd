import express from 'express';
import Nedb =  require('nedb');

import { StudentController } from './student.controller';

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port = 3300;

// Database connection
const db = new Nedb({ filename: './db/student.db', autoload: true});

// nedb - Insert example
// const insertData = {id: 1, name: 'Seethu', age: 28, dob: '1989-09-14'};
// db.insert(insertData, (err, newDoc) => console.log(newDoc));

// nedb - Querying examples
// To get all document
// db.find({age: 28}, (err: Error, doc: object) => console.log('find: ', doc));

// To get jus one document
// db.findOne({id: 1}, (err: Error, doc: object) => console.log('findOne: ', doc));

// To get all document with single node
// This is equivalent to query 'select name from student'
// db.find({age: 28}, {name: 1}, (err: Error, doc: object) => console.log('With Projection', doc));

app.use('/student', StudentController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
