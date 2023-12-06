const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Pessoa  = Schema({
    login: {
        type: String,
        required: true 
    },
    senha: { 
        type: String, 
        required: true 
    },
    nome: { 
        type: String,
        trim: true, 
        default: "Sem Nome",
        required: true 
    },
    email: { 
        type: String,
        trim: true, 
        required: false 
    },
    curso: { 
        type: String,
        trim: true, 
        required: false 
    },
    periodo: { 
        type: String,
        trim: true, 
        required: false 
    },
	tipo: { // 0 - Administrador, 1 - Monitor, 2 - Usuario
        type: Number,
        min: 0, 
        max: 2, 
        default: 1
    },
    tipo_descricao: { 
        type: String,
        trim: true, 
        default: "Monitor",
        required: true 
    },
    ocultado: { 
        type: Boolean,
        required:true,
        default: false
    }
});

module.exports = mongoose.model("Pessoa ", Pessoa )