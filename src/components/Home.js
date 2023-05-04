import React, {useState} from "react"

function Home(){

// const nombre = "Din Djarin";
// const nombreClave = "Mando"

const [nombre, setNombre] = useState("Din Djarin")
const [nombreClave, setNombreCLave] = useState("Mando")
const [input, setInput] = useState('');


const planetas = [
    "Nevarro",
    "Mandalore",
    "Tatooine",
    "Plazir-15",
    "Coruscant"
]

const cambiarNombre =(nuevoNombre) => {
    setNombre(nuevoNombre)
}

const cambiarNombreClave =(nuevoNombreClave) => {
    setNombreCLave(nuevoNombreClave)
}

const removerNombre = (e) => {
   e.prventDefault()
    setInput("")
}


    return(
        <div>
            <h1>This is the way</h1>
            <p></p>
            <p>Mi nombre es: <strong>{nombre}</strong> </p>
            <p>Nombre clave: {nombreClave} </p>

            <form>
            <input onSubmit={removerNombre} type="text" onChange={e=>cambiarNombre(e.target.value)} placeholder="Cambia el nombre"/>
            <button onClick={e => cambiarNombre()}>Cambiar Nombre</button>
            </form>

            <form>
            <input onSubmit={removerNombre} type="text" onChange={e=>cambiarNombreClave(e.target.value)} placeholder="Cambia el nombre clave"/>
            <button onClick={e => cambiarNombreClave()}>Cambiar Nombre Clave</button>
            </form>


            <h2>Planetas: </h2>
            <ul>
                {
                    planetas.map((planeta, indice) => {
                        return (
                            <li key={indice}>{planeta}</li>
                        )
                    })
                }
            </ul>


        </div>
    )

}

export default Home