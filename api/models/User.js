const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    first: String,
    last: String,
    email: {type: String, unique: true},
    password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;