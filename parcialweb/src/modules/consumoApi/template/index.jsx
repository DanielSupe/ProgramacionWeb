import React, { useEffect, useState } from 'react'
import axios from "axios";
const ConsumoApiTemplate = () => {

  const campos = [
    { name: "Names", type: "text", nameKey: "Names" },
    { name: "Telephone", type: "number", nameKey: "phone" },
    { name: "imageUrl", type: "text", nameKey: "image" },
  ]

  const [form, setForm] = useState({ Names: "", phone: "", image: "" })
  const [list, setList] = useState([])

  const handleForm = (namekey,change) => {
    setForm({
      ...form,
      [namekey]:change
    })
  }

  const getContacto = async()=>{
    const value = await  axios.get(`https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project`); 
    setList(value.data)
  }

  useEffect(()=>{
    console.log(list,"cambioo")
  },[list])

  useEffect(()=>{
    getContacto()
  },[])

  const CreateContact = async ()=>{
    const {Names,phone,image} = form
    if(Names != "" && phone != "" && image != ""){
      const response = await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', {
          "names": Names,
          "telephone": phone,
          "image": image
    });
    }
    const value = await  axios.get(`https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project`); 
    setList(value.data)
  }



  return (
    <div className=' h-screen w-screen overflow-hidden flex flex-col'>
      <div className='h-[8vh] w-full -400 box-border p-2 border-b flex justify-start items-center border-black underline text-xl font-bold bg-blanco'>
        Agenda
      </div>
      <div className='w-full h-full flex '>

        <div className='w-[300px] h-full box-border p-2 flex flex-col justify-center items-center border-r border-black bg-azulgris'>
          <span className=' font-bold text-2xl text-center uppercase'>Agregar contacto</span>
          <div className=' w-full flex flex-col justify-center items-center'>
            {campos.map((input) => {
              return (
                <div className='flex w-full flex-col justify-start items-start my-3' key={input.name}>
                  <p>{input.name}</p>
                  <input className=' rounded-lg w-full' value={form[input.nameKey]} type={input.type} onChange={(e) => { handleForm(input.nameKey,e.target.value) }} />
                </div>
              )
            })}
          </div>
          <button onClick={()=>{CreateContact()}} className=' mt-5 py-2 px-8 border border-black rounded-xl'>Añadir</button>
        </div>


        <div className='w-full h-full box-border p-2 bg-blanco grid grid-cols-autoFit gap-2 overflow-auto'>

          {list.map((contacto)=>{
            return(
              <div className=' h-[200px] border border-black flex flex-col items-center justify-center rounded-xl' key={contacto.id}>
                <div className='h-[100px]'>
                  <img className='max-h-[100px]' src={contacto.image}/>
                </div>
                 <p>{contacto.names}</p>
                 <p>{contacto.telephone}</p>
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default ConsumoApiTemplate