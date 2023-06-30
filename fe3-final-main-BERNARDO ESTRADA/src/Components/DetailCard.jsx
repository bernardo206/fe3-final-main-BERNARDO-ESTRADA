import { useEffect } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";

const DetailCard = () => {

  useEffect(() => {
    //En este useEffect, obtendrá la API pasando el
     // identificación del dentista que proviene de react-router y carga los datos en algún estado
  }, []);
  return (
    //Las declaraciones que están con {''} deben ser
     // reemplazada con la información que proviene de la API
    <>
      <h1>Detalle sobre dentista {'Nombre del dentista'} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
         // está en modo oscuro y debe usar CSS correcto*/}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {'Nombre del dentista'}</li>
              <li className="list-group-item">
                Sobrenombre: {'Sobrenome do Dentista'}
              </li>
              <li className="list-group-item">
                usuario: {'Nome de usuário do Dentista'}
              </li>
            </ul>

            <div className="text-center">
              {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
               // está en modo oscuro y debe usar CSS correcto*/}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;

