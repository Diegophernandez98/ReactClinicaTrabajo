import React, { useEffect, useState } from 'react'

const HorasMedicas = ({pacientes, setPacientes, doctores, setDoctores, hora, setHora, dia, setDia, valor, setValor}) => {
    const [nuevaHora, setNuevaHora] = useState({nombrePac:"", nombreDoc:"", espec:"", hora:"", dia:"", valor:""});
  return (
    <>
        <h3 style={{marginTop:"30px"}} >Lista de Horas Agendadas</h3>
        <div>
            <table id="tableID" className="table table-bordered border-primary table-dark table-striped">
                <thead id="theadID">
                    <tr>
                        <th>Nombre Paciente</th>
                        <th>Nombre Doctor</th>
                        <th>Especialidad</th>
                        <th>Hora</th>
                        <th>Dia</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody id="idTbody">

                </tbody>
            </table>
        </div>
    </>
  )
}

export default HorasMedicas