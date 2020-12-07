import logo from './logo.svg';
//Importamos router para traernos las dependencias de la navegación

import {BrowserRouter as Router,
        Route
} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
      //Envolvemos el código dentro del router component
      //Article:name --> Aquí recogemos el parámetro de la URL para poderlo utilizar en la página en cuestión
      <Router>
    <div className="App">
      {/*Le decimos que la home debe abrir el componente de hompage usando exact le decimos que sólo queremos que cargue
      el componente cuando sea esa ruta y si no, que no cargue nada*/}
      <Route path = "/" component={HomePage} exact />
    </div>
      </Router>
  );
}

export default App;
