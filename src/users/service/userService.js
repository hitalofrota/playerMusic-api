const userRepository = require('../repository/userRepository.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.registerUser = async (name, email, password) => {
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
        throw new Error('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
        name,
        email,
        password: hashedPassword
    };

    return await userRepository.createUser(newUser);
};

exports.getUsers = async () => {
    return await userRepository.findAllUsers();
};

exports.getUserById = async (id) => {
    const user = await userRepository.findUserById(id);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user;
};

exports.updateUser = async (id, userData) => {
    const user = await userRepository.updateUser(id, userData);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user;
};

exports.deleteUser = async (id) => {
    const user = await userRepository.deleteUser(id);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user;
};
