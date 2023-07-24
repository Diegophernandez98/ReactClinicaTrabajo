import React, { useEffect } from 'react'

const TablaPacientes = ({pacientes, setPacientes}) => {
  return (
    <>
        <h3 style={{marginTop:"30px"}}>Lista de Pacientes</h3>
        <div>
            <table id="tableID" className="table table-bordered border-primary table-dark table-striped">
                <thead id="theadID">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody id="idTbody">
                    {pacientes.map((pac, index) => (
                        <tr key={index}>
                            <td>{pac.id}</td>
                            <td>{pac.nombre}</td>
                            <td>{pac.apellido}</td>
                        </tr>
                    ))};

                </tbody>
            </table>
        </div>
    </>
  )
}

export default TablaPacientes