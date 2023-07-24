import React from 'react'

const DiaHora = () => {
    const listaHoras = [];
    const listaDias = [];
    const listaMeses = [];

    for (var hora = 7; hora < 21; hora++) {
        listaHoras.push(hora);
    };

    for (var dia = 1; dia < 32; dia++) {
        listaDias.push(dia);
    };

  return (
    <>
            <label>Hora: </label>
            <select name="hora" id="hora">
                    {
                        listaHoras.map((hora, indice) => (
                            <option key={indice}> {hora}:00 </option>
                        ))
                    }
            </select>

            <label> Dia: </label>
            <select name="dia" id="dia">
                    {
                        listaDias.map((dia, indice) => (
                            <option key={indice}> {dia} </option>
                        ))
                    }
            </select>
    </>
  )
}

export default DiaHora