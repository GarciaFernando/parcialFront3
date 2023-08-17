import { useState } from "react"

function Form(props){
    const [nombre,setNombre]=useState('')
    const [pokemon,setPokemon]=useState('')
    const [mensaje, setMensaje]=useState('')
    const validation = (event)=>{
        event.preventDefault()
        if(nombre.length<3||nombre.trimStart()!==nombre|| pokemon.length<6){
            setMensaje("Por favor chequea que la información sea correcta")
            setNombre('')
            setPokemon('')
        }else{
            setMensaje('')
            props.onDatos(nombre,pokemon)
        }
    }

    return(
        <form onSubmit={validation}>
            <label htmlFor="nombre">Ingrese su nombre:</label>
            <input type="text" id="nombre"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}/>
            <label htmlFor="pokemon">Ingrese un pokemon:</label>
            <input type="text" id="pokemon"
            value={pokemon}
            onChange={e=>setPokemon(e.target.value)}/>
            {mensaje?<p id="error">{mensaje}</p>:null}
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form