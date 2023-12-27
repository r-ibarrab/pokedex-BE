const pokeApiService = require("../services/pokeApiService")

const get = async (req,res) =>{
    const page = req.query.page 
    const limit = req.query.limit
    const search = req.query.search
   
    if( (limit && isNaN(parseInt(limit))) || (page  && isNaN(parseInt(page)) || (search  && !isNaN(parseInt(search))) )) return res.status(400).json({error:"Bad request"})
      

   const serviceResponse = await pokeApiService.getPokemons(limit,page,search)


   
   if(serviceResponse.error) return res.status(500).json({error:"Internal Server Error"})

   if(serviceResponse.data.length == 0) return res.status(404).json({error:"Data not found"})

   res.status(200).json({data:serviceResponse.data})
}

module.exports = {
    get
}