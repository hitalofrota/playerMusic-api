const express = require('express');
const musicRoutes = require('../routes/musicRoutes'); // Rotas de música
const userRoutes = require('../users/routes/userRoutes'); // Rotas de usuário

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("API em execução");
});

router.use('/api', musicRoutes); 
router.use('/user', userRoutes);

module.exports = router;
