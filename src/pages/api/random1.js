import axios from "axios";

export default async function(req, res) {
    let x = Math.floor(Math.random() * 1008 )+ 1;
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + x)
    .then(response=> {
        let typesPoke = [];
        response.data.types.forEach(i => {
        typesPoke.push(i.type.name);
        })
        console.log(response.data);
        return res.status(200).json({"name" : response.data.name, "sprite" : response.data.sprites.front_default, "types" : typesPoke});
    })
}
