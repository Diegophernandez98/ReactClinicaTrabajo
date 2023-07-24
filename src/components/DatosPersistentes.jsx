import React, { useEffect, useState } from 'react'

const DatosPersistentes = ({pacientes, setPacientes, doctores, setDoctores, selectHoras, selectDias}) => {
  const [nuevoPaciente, setNuevoPaciente] = useState({id: "", nombre: "", apellido: ""});
  const [nuevoDoctor, setNuevoDoctor] = useState({id: "", nombre: "", especialidad: ""});

  const agregarPac = () => {
    if (nuevoPaciente.id!="" & !isNaN(nuevoPaciente.id) & nuevoPaciente.nombre!="" & isNaN(nuevoPaciente.nombre)
    & nuevoPaciente.apellido!="" & isNaN(nuevoPaciente.apellido)) {
      const listaPacientes = JSON.parse(localStorage.getItem("Pacientes") || []);
      setPacientes((old) => [...old, nuevoPaciente])
      localStorage.setItem("Pacientes", JSON.stringify(listaPacientes));
      setNuevoPaciente({ id: "", nombre: "", apellido: "" });
    }
  };

    const agregarDoc = () => {
      if (nuevoDoctor.id!="" & !isNaN(nuevoDoctor.id) & nuevoDoctor.nombre!="" 
      & isNaN(nuevoDoctor.nombre) & nuevoDoctor.especialidad!="" & isNaN(nuevoDoctor.especialidad)) {
        const listaDoctores = JSON.parse(localStorage.getItem("Doctores")) || [];
        setDoctores((old) => [...old, nuevoDoctor])
        localStorage.setItem("Doctores", JSON.stringify(listaDoctores));
        setNuevoDoctor({ id: "", nombre: "", especialidad: "" });
      }
    };


    const handleGuardar = () => {
      setPacientes((old) => [...old, nuevoPaciente.nombre])
    }
  

  return (
    <>
      <div>
        <label>Precio: </label>
        <input type="number" placeholder="Ingrese un valor"></input>


        <label>Hora: </label>
        <select name="hora" id="hora">
          {selectHoras.map((hora, indice) => (
              <option key={indice}> {hora}:00 </option>
          ))};
        </select>

        <label> Dia: </label>
        <select name="dia" id="dia">
          {
            selectDias.map((dia, indice) => (
              <option key={indice}> {dia} </option>
            ))
          }
        </select>
      </div>
      <div>
        <button style={{marginBottom:"40px", marginTop:"5px", borderRadius:"20px"}} type="button" id="btnAgendar">AGENDAR HORA</button>
      </div>
      <div>
        <h3>Agregar Nuevo Paciente</h3>
        <div>
          <input 
            style={{marginBottom:"5px"}} 
            key="nuevoPacId" 
            type="text" 
            placeholder="Ingrese ID" 
            value={nuevoPaciente.id} 
            onChange={(e) => setNuevoPaciente({ ... nuevoPaciente, id: e.target.value})}
          />
          <input 
            style={{marginBottom:"5px"}} 
            key="nuevoPacNom" 
            type="text" 
            placeholder="Ingrese Nombre" 
            value={nuevoPaciente.nombre}
            onChange={(e) => setNuevoPaciente({ ... nuevoPaciente, nombre: e.target.value})}
          />
          <input 
            style={{marginBottom:"5px"}} 
            key="nuevoPacApe" 
            type="text" 
            placeholder="Ingrese Apellido" 
            value={nuevoPaciente.apellido} 
            onChange={(e) => setNuevoPaciente({ ... nuevoPaciente, apellido: e.target.value})}
          />

        </div>
        <p>ID: {nuevoPaciente.id}</p>
        <p>Nombre: {nuevoPaciente.nombre}</p>
        <p>Apellido: {nuevoPaciente.apellido}</p>
        <button style={{marginBottom:"40px", borderRadius:"20px"}} type="button" id="btnAgregarPac" onClick={agregarPac}>Agregar</button>

        <h3>Agregar Nuevo Doctor</h3>
        <div>
          <input 
            style={{marginBottom:"5px"}} 
            key="nuevoDocId" 
            type="text" 
            placeholder="Ingrese ID" 
            value={nuevoDoctor.id} 
            onChange={(e) => setNuevoDoctor({ ... nuevoDoctor, id: e.target.value})}
            />
          <input
            style={{marginBottom:"5px"}} 
            key="nuevoDocNom" 
            type="text" 
            placeholder="Ingrese Nombre" 
            value={nuevoDoctor.nombre}
            onChange={(e) => setNuevoDoctor({ ... nuevoDoctor, nombre: e.target.value})}
            />
          <input 
            style={{marginBottom:"5px"}} 
            key="nuevoDocEsp" 
            type="text" 
            placeholder="Ingrese Especialidad" 
            value={nuevoDoctor.especialidad} 
            onChange={(e) => setNuevoDoctor({ ... nuevoDoctor, especialidad: e.target.value})}
            />

        </div>
        <p>ID: {nuevoDoctor.id}</p>
        <p>Nombre: {nuevoDoctor.nombre}</p>
        <p>Especialidad: {nuevoDoctor.especialidad}</p>
        <button style={{marginBottom:"40px", borderRadius:"20px"}} type="button" id="btnAgregarDoc" onClick={agregarDoc}>Agregar</button>
        
        <h3>Filtrar Horas Médicas</h3>
        <select style={{marginRight:"10px", borderRadius:"20px"}}>
          <option key={-1}>Seleccione un doctor</option>
          {
            doctores.map((doctor, index) => (
              <option key={index}>{doctor.nombre} ({doctor.especialidad})</option>
            ))
          }

        </select>
        
     
        -----
        <select style={{marginLeft:"10px", borderRadius:"20px"}}>
          <option key={-1}>Seleccione un paciente</option>
          {
            pacientes.map((pac, index) => (
              <option key={index}>{pac.nombre}</option>
            ))
          }

        </select>

 

    </div>
    </>
  );
};
export default DatosPersistentes;