const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'bcategory'
    },
    createdDate : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('bblog',blogSchema)