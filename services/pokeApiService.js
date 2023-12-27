const axios = require("axios")


const getPokemons = async (limit,page,search) => {
    let error = false
    let data = ""
    let count = 0
    
    try{
        if(!page || page<1 || search) page = 1

        if(!limit || search){
            count = await axios.get("https://pokeapi.co/api/v2/pokemon");
            limit = count.data.count
        }

        
        data = await axios.get("https://pokeapi.co/api/v2/pokemon",{
            params:{
                limit:parseInt(limit),
                offset:parseInt(limit)*(parseInt(page)-1)
            }
        });

        data = data.data.results
        

        if(search){
            const regex = new RegExp('^' + search);
            data = data.filter(el=>el.name.match(regex))
        }
       
      data.sort((a,b)=> {
        const A = a.name.toUpperCase()
        const B = b.name.toUpperCase()

        if(A>B) return 1
        if(B>A) return -1

        return 0
      })

    }catch(e){
        console.log(e)
        error = true
        data = e
    }

    return {error,data}
}

module.exports = {
    getPokemons
}