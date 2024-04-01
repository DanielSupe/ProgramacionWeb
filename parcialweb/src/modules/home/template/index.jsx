import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { sumarCuadros } from '../../../helpers/puntoLogico';

const HomeTemplate = () => {


      //-------------------------------------------!!!!!!!-------------------------------
                                //PUNTO LOGICO
    useEffect(() => {
        console.log(sumarCuadros([1, 23, 453, 3267, 12354, 123456]));
    }, [])

    //--------------------------------------------!!!!!!------------------------------------------


  return (
    <div className=' w-screen h-screen bg-blanco flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
            <Link className='py-2 px-5 rounded-lg bg-azulgris m-2' to='/Login'>Login</Link>
            <Link className='py-2 px-5 rounded-lg bg-azulgris m-2' to='/ConsumoApi'>Consumo Api</Link>
        </div>
        <p>Mirar la consola para el punto logico, esta aqui en la raiz </p>

    </div>
  )
}

export default HomeTemplate