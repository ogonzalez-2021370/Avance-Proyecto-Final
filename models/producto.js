const {Schema, model} = require('mongoose');

const ProductoSchema = new Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']

    },
    precio:{
        type:Number,
        required:[true,'El precio es obligatorio']
    },
    categoria:{
        type:String,
        required:[true,'La categoria es obligatoria']
    },
    descripcion:{
        type:String,
        required:[true,'La descripcion es obligatoria']
    },
    stock:{
        type:Number,
        required:[true,'El stock es obligatorio']
    }

});

module.exports = model('Producto',ProductoSchema);