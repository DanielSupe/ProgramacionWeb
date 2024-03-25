import axios from "axios";

async function obtenerDatos(numero) {
    try {
      
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);

      // Devolver los datos obtenidos
      return response.data
    } catch (error) {
      throw new Error('Error ' + error.message);
    }
  }
  
 
  export async function maingetPokemon(numero = 1) {
    try {
      const datos = await obtenerDatos(numero);
      return datos;
    } catch (error) {
      console.error(error.message);
    }
  }
  
  
