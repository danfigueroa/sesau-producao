const restful = require('node-restful')
const mongoose = restful.mongoose

const DigitadorSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    cpf: { type: String, unique: true, required: true },
    sexo: { type: String, required: true },
    dataCadastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Digitador', DigitadorSchema);
