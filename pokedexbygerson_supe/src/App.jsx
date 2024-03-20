import { useEffect, useState } from 'react'
import { maingetPokemon } from './Helpers/getPokemon'

const App = () => {


  const [pokemonID, setPokemon] = useState(1);
  
  const [pokemonDta, setPokemonData] = useState();


  const funtion = async ()=>{
    
    if(pokemonID && pokemonID <= 1008){
      const pokemon = await maingetPokemon(pokemonID);
      setPokemonData(pokemon)
    }

  }


  const handlePokemon = (e)=>{
    setPokemon(e.target.value)
  }

  useEffect(()=>{
    funtion();
  },[pokemonID])


  useEffect(()=>{
    console.log(pokemonDta, "dataa")
  },[pokemonDta])


  return (
    <div className=' w-screen h-screen flex justify-center items-center bg-no-repeat bg-current bg-left' style={{ backgroundImage: `url('fondo.jpg')` }}>
      <div className=' w-[800px] h-[500px] bg-lime-300 flex flex-col justify-start items-center box-border p-2'>
          <h1 className=' text-center text-5xl font-bold'>Pokedex</h1>
          {pokemonDta ? (
            <div className='h-full w-full flex justify-start items-center'>
              <img className=' h-80' src={pokemonDta.sprites.front_default}  alt='pokemon'/>
              <div className=' h-full w-1/3 flex justify-center items-center flex-col'>
                <p className=' font-medium'>Name:{pokemonDta.species.name}</p>
                <input type='number' value={pokemonID} onChange={(e)=>{handlePokemon(e)}}/>
              </div>


          </div>
          ):null}
      </div>
    </div>
  )
}

export default App


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