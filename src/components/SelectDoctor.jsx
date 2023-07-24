import React from 'react';

const SelectDoctor = ({doctores, setDoctores}) => {
    return (
        <>

                <label htmlFor="doctor">Doctor: </label>
                <select name="doctor" id="doctor">
                    {
                        doctores.map((doctor, indice) => (
                            <option key={doctor.id}>{doctor.nombre} ({doctor.especialidad})</option>
                        ))
                    }
                </select> 
        </>
    );
};
export default SelectDoctor;