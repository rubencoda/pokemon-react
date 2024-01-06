import { useState, useEffect } from "react";
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [detailsArray, setDetailsArray] = useState([]);
    
    useEffect(() => {
        // Fetching pokemon list
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetch pokemon list :', error.message);
            }
        };

        fetchPokemonList();
    }, []);

    useEffect(() => {
      const fetchPokemonDetails = async () => {
        const detailsArray = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            const details = response.data;
            return details;
          })
        );
  
        setDetailsArray(detailsArray);
      };
  
      if (pokemonList.length > 0) {
        fetchPokemonDetails();
      }
    }, [pokemonList]);

    console.log(detailsArray);

    return (
      <div>
        <div className="container my-12 mx-auto">
          <div className="flex justify-center items-center">
            <input type="text" className="px-4 py-2 border-2 w-full" placeholder="Search pokemon..."/>
          </div>
          <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center mt-5"> 
            {detailsArray.map((details, index) => (
              <div key={index} className="my-1 px-1 max-w-xs md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg">
                {/* Pokemon Image */}
                <img alt="Placeholder" className="block h-auto w-full" src={details.sprites.front_default} />
                {/* Pokemon Name */}
                <div className="bg-gold-pastel">
                  <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-bold text-xl">
                      {details.name}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between leading-none p-2 md:p-4">
                    <div className="flex items-center no-underline  text-black">
                      <p className="ml-2 text-sm">
                        Abilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default PokemonList