import React, { useEffect } from 'react'

const TablaDoctores = ({doctores, setDoctores}) => {

  return (
    <>
        <h3 style={{marginTop:"30px"}} >Lista de Doctores</h3>
        <div>
            <table id="tableID" className="table table-bordered border-primary table-dark table-striped">
                <thead id="theadID">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                    </tr>
                </thead>
                <tbody id="idTbody2">
                    {doctores.map((doc, index) => (
                        <tr key={index}>
                            <td>{doc.id}</td>
                            <td>{doc.nombre}</td>
                            <td>{doc.especialidad}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TablaDoctores;