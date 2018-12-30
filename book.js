const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
    },
    auther:{
        type:String,
        required:true,
    },
    description: String,
    puplished: Date,
});

module.exports = (mongoose.model('Book',bookSchema));