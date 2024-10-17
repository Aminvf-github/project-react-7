import React from 'react'
import Form from './Components/Form'
import List from './Components/List'
import FormContext from './Context/FormContext'
import { useState } from 'react'

const App = () => {
  const [list, setlist] = useState([])
  const ContextValue = {list ,setlist}

  return <div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row justify-around w-1/2 mx-auto my-72 rounded-lg p-2'>
    <FormContext.Provider value={ContextValue}>
    <Form />
    <List />
    </FormContext.Provider>
  </div>
}

export default App