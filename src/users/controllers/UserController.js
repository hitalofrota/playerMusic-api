const userService = require('../service/userService');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const newUser = await userService.registerUser(name, email, password);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const updatedUser = await userService.updateUser(req.params.id, { name, email, password });
        res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updatedUser });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
