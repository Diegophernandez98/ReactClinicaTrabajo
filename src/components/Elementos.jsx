import React, { useEffect, useState } from "react";
import SelectPaciente from "./SelectPaciente";
import SelectDoctor from "./SelectDoctor";
import DatosPersistentes from "./DatosPersistentes";
import HorasMedicas from "./HorasMedicas";
import TablaPacientes from "./TablaPacientes";
import TablaDoctores from "./TablaDoctores";

const Elementos = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientesIni, setPacientesIni] = useState([]);
  const [doctores, setDoctores] = useState([]);
  const [doctoresIni, setDoctoresIni] = useState([]);
  const [selectDias, setSelectDias] = useState([]);
  const [selectHoras, setSelectHoras] = useState([]);
  const [selectValores, setSelectValores] = useState(0);
  const cargarPacientes = async () => {
    const url = "http://45.236.130.191/api-prueba/clinica.php?action=pacientes";
    const data = await fetch(url);
    if (pacientes == [] || pacientes == "") {
      setPacientes(await data.json());
    }
  };

  const cargarDoctores = async () => {
    const url = "http://45.236.130.191/api-prueba/clinica.php?action=doctores";
    const data = await fetch(url);
    if (doctores == [] || doctores == "") {
      setDoctores(await data.json());
    }
  };

  const cargarDiasHoras = () => {
    for (var hora = 7; hora < 21; hora++) {
      selectHoras.push(hora);
      setSelectDias(selectHoras)
    };

    for (var dia = 1; dia < 32; dia++) {
      selectDias.push(dia);
      setSelectDias(selectDias);
    };
  };

  useEffect(() => {
    cargarDiasHoras();

    var selHoras = localStorage.getItem("Horas");
    if (selHoras) {
      setSelectHoras(JSON.parse(selHoras));
    }
    var selDias = localStorage.getItem("Dias");
    if (selDias) {
      setSelectDias(JSON.parse(selDias))
    }
    var selDoct = localStorage.getItem("Doctores");
    if (selDoct) {
      setDoctores(JSON.parse(selDoct))
    }
    else {
      cargarDoctores();
    }
    
    var selPaci = localStorage.getItem("Pacientes");
    if (selPaci) {
      setPacientes(JSON.parse(selPaci))
    }
    else {
      cargarPacientes();
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("Pacientes", JSON.stringify(pacientes))
  }, [pacientes]);

  useEffect(() => {
    localStorage.setItem("Doctores", JSON.stringify(doctores))
  }, [doctores]);

  useEffect(() => {
    localStorage.setItem("Horas", JSON.stringify(selectHoras))
  }, [selectHoras]);

  useEffect(() => {
    localStorage.setItem("Dias", JSON.stringify(selectDias))
  }, [selectDias]);

  return (
    <>
      <SelectPaciente pacientes={pacientes} setPacientes={setPacientes}/>
      <SelectDoctor doctores={doctores} setDoctores={setDoctores} />
      <DatosPersistentes pacientes={pacientes} setPacientes={setPacientes} doctores={doctores} setDoctores={setDoctores} selectHoras={selectHoras} selectDias={selectDias} />
      <TablaPacientes pacientes={pacientes} setPacientes={setPacientes} />
      <TablaDoctores doctores={doctores} setDoctores={setDoctores} />
      <HorasMedicas pacientes={pacientes} setPacientes={setPacientes} selectHoras={selectHoras} setSelectHoras={setSelectHoras} selectDias={selectDias} setSelectDias={setSelectDias} selectValores={selectValores} setSelectValores={setSelectValores} />
    </>
  );
};
export default Elementos;
