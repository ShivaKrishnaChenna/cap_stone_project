const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    comment: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);