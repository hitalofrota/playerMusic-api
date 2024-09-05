const mongoose  = require('mongoose');

const connectionString = process.env.MONGODB_URI 

const conectionDB = () => {
    try {
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

module.exports = conectionDB