import React from "react"

function Missions(){

    const misiones = [
        "Reparar nave",
        "Sesión de entrenamiento con Grogu",
        "Localizar posición de Moff Gideon",
        "Defender ciudad de ataque pirata",
        
    ]


    return(
        <div>
            <h2>Siguientes misiones</h2>
            <ul>
                {misiones.map((mision, indice) => {
                    return(
                        <li key={indice}>{mision}</li>
                    )
                })}

            </ul>

        </div>
    )

}

export default Missions