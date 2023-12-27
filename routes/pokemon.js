const express = require("express")
const router = express.Router()
const Controller = require("../controllers/PokemonController")


router.route("/")
.get(Controller.get)





module.exports = router