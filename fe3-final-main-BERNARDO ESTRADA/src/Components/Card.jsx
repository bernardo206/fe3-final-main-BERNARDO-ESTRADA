import React from "react";
import { Link } from "react-router-dom";




const Card = ({ name, username, id  }) => {

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({ name, username, id });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
        <div className={`card`}>
        <img
          className="card"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`CardBody`}>
          {/* En la siguiente línea, el enlace debe usar el número de registro, nombre y apellido del dentista
           que proviene de la API */}
          
          <p>{name}</p>
          <p> {username}</p>
          
          <Link to={`/dentist/${id}`}>
        <button className="btnDetail">Detalles</button>
      </Link>
      <button onClick={addFav} className="tbnDetail">Add fav</button>
          
        </div>
      </div>
  );
};

export default Card;
