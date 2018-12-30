const express = require('express');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.post('/sinin', (req, res) => {
    bcrypt.genSalt(10, (salt) => {
        bcrypt.hash(req.body.password, salt, (hashed,err) => {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: hashed,
            });
            user.save()
                .then(result => {
                    const token = jwt.sign({ _id: result._id, exp: Date.now() + 1000 * 60 * 60 }, 'key');
                    res.header({ 'x-auth-token': token }).send('you are sined in');
                }).catch(err => {
                    res.send(err);
                })
        });
    });
})



router.post('/checKlogin', (req, res) => {
    //  check if there token is there
    const token = req.headers.token;
    if (!token) {
        res.status(400).send('token not provided');
    };
    //  decode the token and chekc if it's validate  
    jwt.verify(token, 'key', function (decoded, err) {
        User.findById(decoded._id).then(data => {
            if (!data) {
                res.status(404).send('something not found');
            } else {
                res.send('yay! you are logged in!')
            }
        }).catch(err => {
            res.status(401).send(err.message);
        });
    })
});



router.post('/login', (req, res) => {
    //  check if there is a user data (email & password) in the req body
    if (!req.body.email && !req.body.password) {
        res.status(404).send('invalide email or password ')
    }
    //  chekc if there is such email get the user info
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            res.status(404).send('user not found')
        }
        bcrypt.compare(req.body.password, user.password, (resHash, err) => {
            if (resHash) {
                const token = jwt.sign({ email: user.email, _id: user.id }, 'key');
                res.send({ token });
            } else {
                res.status(401).send('password mismatch')
            }
        });
    }).catch(err => {
        console.log(err.message);
        res.status(404).send(err.message);
    });
})


function userValidating(user) {
    const userSchema = {
        'name': Joi.string().required(),
        'email': Joi.string().required(),
        'password': Joi.string().required()
    };
    return Joi.validate(user, userSchema);
};

module.exports = router;
