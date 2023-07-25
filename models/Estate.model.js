const mongoose = require('mongoose')

const estateSchema = mongoose.Schema({
    image: [],
    address:String,
    rooms: Number,
    area: String,
    price:Number,
    type:String,
    ready:String,
    rented:{
        type:Boolean,
        default:false
    },
    desc:String


})

const Estate = mongoose.model('Estate',estateSchema)

module.exports = Estate