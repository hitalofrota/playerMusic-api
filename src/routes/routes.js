const express = require('express');
const musicRoutes = require('../routes/musicRoutes'); 
const userRoutes = require('../users/routes/userRoutes.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("API em execução");
});

router.use('/api', musicRoutes); 
router.use('/user', userRoutes);

module.exports = router;
