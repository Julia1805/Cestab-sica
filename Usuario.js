const {Schema, model} = require ("mogoose");
const UsuarioSchema = new Schema(
    {
        nome: {
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        senha:{
            type:String,
            require:true
        },
        token:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true
    }
);

module.exports = model("Usuario", UsuarioSchema);