// require('dotenv').config();

// const mongoString = process.env.DATABASE_URL
// console.log(mongoString);
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');



const app = express();
//express is also capable of json parsing
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
})

app.use('/api', routes);

mongoose.connect("mongodb+srv://thriftyBoys:VmlpPJlKBtXRG1lR@thriftygrocers.0n0bipv.mongodb.net");
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error);
})
database.once('connected', () => {
    console.log('Database Connected');
})

