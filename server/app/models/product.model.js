const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: String,
    imagePath: String,
    fullname: String,
    address: String,
    state: String,
    status: String,
    phonenumber: String,
    userid : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);