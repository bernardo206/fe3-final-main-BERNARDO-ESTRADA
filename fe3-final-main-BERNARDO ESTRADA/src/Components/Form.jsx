import styles from "./Form.module.css";
import { useState } from "react";


const Form = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const onChangeFullname = (e) => setFullname(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

   //validacion de Fullname
  const validacionfullname = (fullname) => {
    if (fullname.length >= 5) {
      return true;
    } else {
      return false;
    }
  };


  //validacion de Email
  const validacionemail = (email) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) {
      return true;
    } else {  
      return false;
    }
  };








  const handleSubmit = (e) => {
     //En este handlesubmit debes usar preventDefault,
    e.preventDefault();
    

    if (validacionemail(email) && validacionfullname(fullname)) {
      // Realiza las acciones necesarias cuando el formulario es válido
      alert(`Gracias ${fullname}, te contactaremos cuanto antes vía mail`);
      
      
    } else {
      // Realiza las acciones necesarias cuando el formulario es inválido
      alert(' Por favor verifique su información nuevamente');
    }


   };
   
  
     //enviar los datos del formulario y enviarlo en el cuerpo de la solicitud
     //a la ruta api que realiza el inicio de sesión/autenticación
     // recuerda que esta ruta devolverá un Bearer Token y debe guardarse
     //no hay almacenamiento local para usar en llamadas futuras
     //Con todo funcionando correctamente, el usuario debe ser redirigido a la página principal, con react-router
     //Recuerde usar una alerta para decir si fue exitoso o si ocurrió un error
  
    
  
        return (
        <>
      {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
         // está en modo oscuro y debe usar CSS correcto*/}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>

          <form onSubmit={handleSubmit}>

            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nombre completo"
              name="Nombre completo"
              type="text"
              value={fullname}
              onChange={onChangeFullname}
             
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="Email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              
            />
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;




