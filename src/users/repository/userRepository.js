const User = require('../models/User.js');

exports.findAllUsers = async () => {
    return await User.find({});
};

exports.findUserById = async (id) => {
    return await User.findById(id);
};

exports.createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

exports.updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
};

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};
