const express = require('express');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose')
const Book = require('../models/book')
const uuidv1 = require('uuid/v1')

router.get('/', (req, res) => {
    book.find()
        .then(resalt => {
            res.send(resalt)
        }).catch(err => {
            res.status(400).send(err)
        })
});

router.post('/', (req, res) => {
    let pdf = req.files.thumbnail;
    fileName = uuidv1();
    pdf.mv(`./public/${fileName}.pdf`, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
     
    let cover = req.files.thumbnail;
    fileName = uuidv1();
    cover.mv(`./public/${fileName}.png`, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
            
        const book = new Book({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                auther: req.body.auther,
                description: req.body.description,
                puplished: req.body.puplished,
            });
            book.save().then(result => {
                res.send('the book is puplished');
            }).catch(err => {
                res.send(err)
            })
        })
    })
})
    module.exports = router;
