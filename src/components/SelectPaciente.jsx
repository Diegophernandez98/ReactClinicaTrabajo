import React, { useEffect } from "react";


const SelectPaciente = ({pacientes, setPacientes}) => {
    return (
        <>
            <h3>Agendar Hora</h3>
                <label htmlFor="paciente">Paciente: </label>
                <select name="paciente" id="paciente">
                    {
                        pacientes.map((paciente, index) => (
                            <option key={paciente.id}>{paciente.nombre} {paciente.apellido}</option>
                        ))
                    }
                </select> 
        </>
    );
};

export default SelectPaciente;
