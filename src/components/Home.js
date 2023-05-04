import React, {useState} from "react"

function Home(){

// const nombre = "Din Djarin";
const web = "mando.com"

const [nombre, setNombre] = useState("Din Djarin")
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

const removerNombre = (e) => {
   e.prventDefault()
    setInput("")
}


    return(
        <div>
            <h1>This is the way</h1>
            <p></p>
            <p>Mi nombre es: <strong>{nombre}</strong> </p>
            <p>Mi web es: {web} </p>

            <input onSubmit={removerNombre} type="text" onChange={e=>cambiarNombre(e.target.value)} placeholder="Cambia el nombre"/>

            <button onClick={e => cambiarNombre()}>Cambiar Nombre</button>

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