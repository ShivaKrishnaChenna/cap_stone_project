const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    imagePath: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);