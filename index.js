// env variables
const config = require("./config")

// utilities
const morgan = require("morgan")
const cors = require("cors")

// routes
const PokemonRoute = require("./routes/pokemon")

// express
const express = require("express")
const app = express()


const PORT = config.port|| 3002

if (config.environment === 'DEVELOPMENT') {
  app.use(morgan("dev"))
}
app.use(express.json())
app.use(cors())

app.use("/api/pokemons",PokemonRoute)

app.listen(PORT,(e)=>{
    if(!e) return console.log("Server running")
    console.log("Error:",e)
})