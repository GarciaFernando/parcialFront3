function Card(props) {
  const {children}=props
  console.log("Adentro de card")
  console.log(children)
    return (
      
      <div className="card">
        <h2>Hola {children.nombre}</h2>
        <p>Elegiste el pokemon:</p>
        <h1>{children.pokemon}</h1>
      </div>
    );
  }
  
  export default Card;