const User = require('../models/User.js');

exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

exports.findUserById = async (id) => {
    return await User.findById({ id });
}

exports.createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
}

exports.updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData);
}

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}