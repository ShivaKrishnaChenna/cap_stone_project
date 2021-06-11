const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: String,
    imagePath: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);