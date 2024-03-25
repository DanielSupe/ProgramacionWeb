import React, { useEffect, useState } from 'react';
import { maingetPokemon } from './Helpers/getPokemon';

const App = () => {
  const [pokemonID, setPokemonID] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  const fetchData = async () => {
    if (pokemonID && pokemonID <= 1008) {
      const pokemon = await maingetPokemon(pokemonID);
      setPokemonData(pokemon);
    }
  };

  const handlePokemonChange = (e) => {
    setPokemonID(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [pokemonID]);

  useEffect(() => {
    console.log(pokemonData, "dataa");
  }, [pokemonData]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-no-repeat bg-cover bg-current bg-center" style={{ backgroundImage: "url('fondo.jpg')" }}>
      <div className="w-96 bg-green-400 border border-solid border-black rounded-lg shadow-lg flex flex-col justify-start items-center p-8">
        <h1 className="text-5xl font-bold text-center mb-4">Pokedex</h1>
        {pokemonData && (
          <div className="flex flex-col items-center">
            <p className="font-medium mb-2 ">Name: {pokemonData.species.name}</p>
            <img className="h-40 mb-2 border border-solid border-black rounded-lg bg-green-400" src={pokemonData.sprites.front_default} alt="pokemon"/>
            <div className="flex flex-col items-center">
            <input type="number" value={pokemonID} onChange={handlePokemonChange} className="px-2 py-1 border border-gray-300 rounded-md text-center w-full"/>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;



// const fetchData = async () => {
//   try {
//     const productsData = await medusaClient.products.list({ limit: 50 });
//     // Usamos 'as' para forzar el tipo de los datos devueltos
//     setProducts(productsData.products as any);
//   } catch (error) {
//     console.error('Error al obtener la lista de productos:', error);
//   }
// };

// fetchData();