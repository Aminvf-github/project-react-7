import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import FormContext from '../Context/FormContext'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const { register ,handleSubmit} = useForm()
  const {setlist ,  list} = useContext(FormContext)
  const handleSub =(data)=>{
    setlist([...list , {...data , id: uuidv4()}])
  }

  return <div>
    <form onSubmit={handleSubmit(handleSub)} >
        <div>
        <label htmlFor="FirstName" className='text-violet-600 font-bold'>FirstName : </label>
        <input className='p-2 border-none outline-none rounded m-5' {...register("FirstName")} placeholder='enter your FirstName...' type="text" id="FirstName" />
        </div>
        <div>
        <label htmlFor="LastName" className='text-violet-600 font-bold' >LastName : </label>
        <input className=' p-2 border-none outline-none rounded m-5' {...register("LastName")} placeholder='enter your LastName...' type="text" id="LastName" />
        </div>
        <div>
        <label htmlFor="Email" className='text-violet-600 font-bold'>Email : </label>
        <input className=' p-2 border-none outline-none rounded m-5' {...register("Email")} placeholder='enter your Email...' type="Password" id="Email" />            
        </div>
        <div className=' flex flex-row justify-center'>
          <button type='submit' className='bg-green-600 text-white p-2 rounded-lg  w-32'>submit</button>
        </div>
        
    </form>
  </div>
}

export default Form