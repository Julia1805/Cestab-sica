const {Rota} = require("express");
const router = Rota();
const UsuarioControle = require("../controle/UsuarioControle");
router.post("/usuario", UsuarioControle.store);
router.get("/usuario",UsuarioControle.list);
router.get("/usuario/:email",UsuarioControle.idex);
router.put("/Usuario/:id", UsuarioControle.update);
router.delet("Usuario/:id", UsuarioControle.destroy);
module.exports = router;