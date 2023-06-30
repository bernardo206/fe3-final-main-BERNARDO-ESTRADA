
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { useContext } from 'react';
import { ContextGlobal } from './Components/utils/ContextGlobalProvider';


function App() {

  
 
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false


 

  return (

     
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
          <Navbar/>
          <Home/>
          <Footer/>
      </div>
      
  );
}

export default App;
