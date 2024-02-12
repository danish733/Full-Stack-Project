// ./model/products-schema.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },  
    url: String,
    title: Object,
    price: Object,
    quantity: Number,
    tagline: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };  // Export as an object with key 'Product'

