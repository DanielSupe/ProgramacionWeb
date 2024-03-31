import React, { useEffect } from 'react'
import { sumarCuadros } from '../../../helpers/puntoLogico';
const LoginTemplate = () => {


    //-------------------------------------------!!!!!!!-------------------------------
                                //PUNTO LOGICO
    useEffect(() => {
        console.log(sumarCuadros([1, 23, 453, 3267, 12354, 123456]));
    }, [])


    //--------------------------------------------!!!!!!------------------------------------------

    return (
        <div className=' w-screen h-screen flex justify-center items-center relative'>
            <div className=' h-full w-[40vw] bg-verdeLogin' >

            </div>

            <div className=' absolute sm:w-[60vw] h-[80vh] shadow-shadow3xl flex'>
                <div className='h-full w-1/3 flex flex-col justify-center items-center'>
                    <img className=' h-32' src='/chanel2.png' alt='logo' />
                    <p className=' text-center lg:max-w-40 font-medium max-w-full'> India first waterless car cleaning company</p>
                </div>
                <div className='w-2/3 h-full flex flex-col justify-start items-center'>
                    <div className='w-full flex justify-end box-border py-2 px-8 font-medium'>
                        Need help?
                    </div>
                    <div className=' h-full w-full flex flex-col justify-center items-center'>
                        <span className=' font-bold mb-4'>Log in</span>
                        <div className='w-2/3'>
                            <div className='w-full flex flex-col items-start mt-4'>
                                <p className=' font-medium'>Email</p>
                                <input className='w-full p-2 border rounded-lg border-gray-200' placeholder='joe@gmail.com' type='email' />
                            </div>

                            <div className='w-full flex flex-col items-start mt-4'>
                                <p className=' font-medium'>Password</p>
                                <input className='w-full p-2 border rounded-lg border-gray-200' placeholder='Enter your password' type='password' />
                            </div>
                            <div className='w-full flex justify-end font-medium text-end'>
                                forgot password?
                            </div>


                            <button className='w-full p-2 rounded-lg bg-verdeLogin font-medium mt-12'>Login</button>
                        </div>

                    </div>
                </div>

            </div>

            <div className=' h-full w-[60vw]'>

            </div>
        </div>
    )
}

export default LoginTemplate