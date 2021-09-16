import React, {useState} from 'react';
import axios from 'axios';


const AxioPokemon = () => {
    const [allPokemons, setAllPokemons] = useState([])

    const clickHandler = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")

        .then(res=>{
            console.log("response look like this")
            console.log(res);

            setAllPokemons(res.data.results);
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div>
            <button onClick ={clickHandler}>Fetch Pokemon</button>
            {
                allPokemons.map((pokemons,idx)=>{
                    return <div  key={idx} className="card">
                    <div className="card-body">
                        <h4 className="card-title">{pokemons.name}</h4>
                        <p className="card-text">
                            
                        </p>
                        {/* <a href="#!" className="btn btn-primary mb-3">Go somewhere</a> */}
                    </div>
                </div>

                })
            }
        </div>
    );
};



export default AxioPokemon;