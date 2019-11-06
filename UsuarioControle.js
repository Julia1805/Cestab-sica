const Usuario = require("../model/Usuario")

module.exports = {
    async store(req, res){
        const usuario = await Usuarios.cerat(req.body);
        return res.send(usuario);
    },
    async  list(req, res){
        const usuario = await Usuarios.find({});
        return res.json(usuario);
    },
    async index(req, res){
        const user = await Usuarios.findOne({email: req.params.email});
        return res.json(usuario);
    },
    async update(req, res){
        const usuario = await Usuarios.findByIdAndUpdate(req.params.id,req.body,{new: ture});
        return res.json(usuario);
    },
    async destroy(req, res){
        await Usuarios.deletOne({_id: req.params.id});
        return res.json({message: "Excluido!"});
    }
}