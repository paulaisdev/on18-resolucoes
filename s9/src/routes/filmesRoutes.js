//AS ROTAS E METODOS DE FILMES

//chama o controller de filmes
const controller = require("../controllers/filmesController") 

const express = require("express") //chamo o express

//função de rotas do express
const router = express.Router() 

//router. metodo http (rota, funcao)
router.get("/catalogo", controller.getAll)

router.get("/filter", controller.getByGender)

router.get("/catalogo/:id", controller.getById)

router.post("/criar", controller.createMovie)

router.put("/update-generico/:id", controller.updateQualquerCoisa)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)

router.delete("/delete/:id", controller.deleteMovie)

//exportando para ser usado no app.js
module.exports = router