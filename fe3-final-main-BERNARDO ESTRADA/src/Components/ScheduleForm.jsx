import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {
  useEffect(() => {
    //En este useEffect, obtendrá la API buscando TODOS los dentistas
     //y pacientes y cargar los datos en 2 estados diferentes
  }, []);

  const handleSubmit = (event) => {
    //En este handlesubmit debes usar preventDefault,
     //obtener los datos del formulario y enviarlos en el cuerpo de la solicitud
     //a la ruta api que marca la consulta
     //recuerda que esta ruta necesita un Bearer Token para funcionar.
     //Recuerde usar una alerta para decir si fue exitoso o si ocurrió un error
  };

  return (
    <>
      {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
         // está en modo oscuro y debe usar CSS correcto*/}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {/*Aquí se debe hacer un mapa para listar todos los dentistas*/}
                <option key={'Matricula do dentista'} value={'Matricula do dentista'}>
                  {`Nome Sobrenome`}
                </option>
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patiente
              </label>
              <select className="form-select" name="patient" id="patient">
                {/*Se debe hacer un mapa aquí para listar todos los pacientes*/}
                <option key={'Matricula do paciente'} value={'Matricula do paciente'}>
                  {`Nome Sobrenome`}
                </option>
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
