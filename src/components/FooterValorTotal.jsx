import React, { useEffect, useState } from 'react'

const FooterValorTotal = (horasMedicas, selectDoctor, selectPaciente) => {  
    // Estado para almacenar la suma total de los valores de consulta
    const [sumaTotal, setSumaTotal] = useState(0);

    // Aquí deberías obtener las horas médicas agendadas y filtrarlas según las opciones 
    // seleccionadas en los filtros.
    // Puedes usar useEffect para calcular la suma total cada vez que los datos cambien.
    useEffect(() => {
    // Aquí deberías calcular la suma total de los valores de consulta en función de las 
    // horas médicas filtradas.
    let total = 0;
    // Realiza el cálculo en función de los datos en "horasMedicas"
    setSumaTotal(total);
    }, [horasMedicas, selectDoctor, selectPaciente]);
  return (
    <>
        {/* Footer de la tabla */}
        <div>
            <table>
                <tfoot>
                <tr>
                    <td colSpan="3">Suma Total:</td>
                    <td>{sumaTotal}</td>
                </tr>
                </tfoot>
        </table>
        </div>
    </>
  )
}

export default FooterValorTotal