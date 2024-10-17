import React, { useContext } from 'react'
import FormContext from '../Context/FormContext'

const List = () => {
    const {list, setlist} = useContext(FormContext)
    const deleteItem =(id)=>{
        const newList = []
        list.forEach(element => {
            if (element.id !== id) {
                newList.push(element)              
            }           
        });
        setlist(newList)
    }
  return <div>
    <button className='bg-red-500 text-white border-none outline-none p-2 rounded my-4 ' onClick={()=>setlist([])}>Clear All</button>
    {list.map((item , index)=>(
        <div key={index} className='bg-orange-200 m-2 p-4 rounded-lg'>
            <p><b>FirstName:</b>{item.FirstName}</p>
            <p><b>LastName:</b>{item.LastName}</p>
            <p><b>Email:</b>{item.Email}</p>
            <button className='bg-red-500 text-white border-none outline-none p-1 rounded' onClick={()=>deleteItem(item.id)}>remove</button>
        </div>
    ))}

  </div>
}

export default List