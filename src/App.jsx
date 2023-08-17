
import Form from './components/Form'
import Card from './components/Card'

import './App.css'
import './components/Card.css'
import { useState } from 'react'

function App() {
  const [datos,setDatos]=useState('','')

  function handleSubmit(nombre,pokemon){
    console.log("HandleSubmit" + nombre+ pokemon)
    setDatos({nombre,pokemon})
    console.log(datos)
  }
  const mostrarCard=datos.nombre!==''&&datos.nombre!==undefined && datos.pokemon!=='' && datos.pokemon!==undefined

  return (
    <div className='App'>
      <h1>Completa los datos:</h1>
      <Form onDatos={handleSubmit}/>
      {mostrarCard && <Card>{datos}</Card>}
    </div>
  )
}

export default App
