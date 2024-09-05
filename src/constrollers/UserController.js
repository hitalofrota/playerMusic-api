class UserController {
    async index(req, res) {
        res.send('Hello World');
    }
}

module.exports = new UserController();