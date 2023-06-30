import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ContextGlobal } from "./utils/ContextGlobalProvider";
import { Link } from "react-router-dom";



const Navbar = () => {


   
  const { theme, setDarkTheme, setLightTheme} = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
  if (isDarkMode) setLightTheme();
  else setDarkTheme();
};







  return (
    <header className="sticky-top">
      {/* //En la siguiente línea, se debe realizar una prueba si la aplicación
         // está en modo oscuro y debe usar navbar-dark bg-dark o navbar-light bg-light*/}
      <nav
      
        className={`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label="Third navbar example"
      >
          
        <div className="container">
          {/*Al hacer clic, el usuario debe ser redirigido a casa, con react-router */}
          <h2 className={`navbar-brand ${styles.navbarBrand}`} >
          <Link to="/home"> DH Odontologos | Estrada Bernardo | </Link>
          </h2>
          
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item , nav-link ${styles.navBarLink}`}>
                {/* Al hacer clic, el usuario debe ser redirigido a casa, con react-router*/}
                <Link to="/home">Home</Link>
              </li>
              <li className={`nav-item , nav-link ${styles.navBarLink}`}>
                {/* Si el usuario ha iniciado sesión, debería aparecer un botón de cierre de sesión
                 que borrará el token del almacenamiento local.
                 Si el usuario ha cerrado la sesión, un enlace hará una redirección, con react-router,
                 al formulario de inicio de sesión
                 El botón de cierre de sesión debe probarse en modo oscuro
                 si es así, btn-oscuro, si no, btn-claro*/}
               <Link to="/contact">Contacto</Link>
              </li>

              <li className={`nav-item , nav-link ${styles.navBarLink}`}>
                {/* Al hacer clic, el usuario debe ser redirigido a la página de favoritos, con react-router*/}
                <Link to="/favs">Favoritos</Link>
              </li>

              <div
               className={`nav-item`}>
                {/* Al hacer clic, este botón cambiará la aplicación al modo oscuro o al modo claro.
                  Recuerde usar un estado en contexto para hacer este cambio.
                  En la siguiente línea, se debe realizar una prueba si la aplicación
                  está en modo oscuro y debe usar el ícono ☀ o 🌙 y btn-dark o btn-light*/}
                
                <button
                 className={`btn btn-light${isDarkMode ? "light" : "dark"} ${styles.btnStyle
                 }`}
                 onClick={changeTheme}
             >
                
                {isDarkMode ? "☀" : "🌙"}{" "}
                </button>
                </div>
        
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
