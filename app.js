const express = require('express');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const app = express();
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 2000
const mongoose = require('mongoose')
const fileUploade = require('express-fileupload')

mongoose.connect('mongodb://admin1:admin1@ds227674.mlab.com:27674/firttest');

mongoose.connection.on('connected', ()=>{
    console.log('mongodb is connected......')
})

app.use(express.json());

app.use(fileUploade());

app.use(express.static('public'))

app.use('/users',usersRouter)
app.use('/books',booksRouter);

app.get('/Home', (req,res)=>{
    res.send('you are at home page')
})

app.listen(PORT , ()=>{
    console.log(`Runing at port ${PORT}`)
})
