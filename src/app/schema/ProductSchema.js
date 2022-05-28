const mongoose = require('mongoose')
const uuid = require('uuid')


const ProductSchema = new mongoose.Schema({

    employee_id: {
        type: String,
        default: uuid.v4,
        index: true,
        mongoose: mongoose.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    price: {
        type: String,
        required: true
    },

})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product