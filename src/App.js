
import logo from './logo.svg';
//Importamos router para traernos las dependencias de la navegación
import {BrowserRouter as Router,
        Route,
    Switch
} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import {useEffect, useState} from "react";

function App() {



  return (
      //Envolvemos el código dentro del router component
      //Article:name --> Aquí recogemos el parámetro de la URL para poderlo utilizar en la página en cuestión
      <Router>
    <div className="App">
      {/*Cargamos el componente de la barra de navegación encima del cuerpo de la página ya que queremos que se cargue en todas las páginas*/}
      <NavBar/>
      <div id="page-body">

    {/*Usamos Switch para decirle que una vez encuentre uno de los path no siga mostrando los siguientes. Aquí es importante el orden.*/}
     <Switch>
       {/*Le decimos que la home debe abrir el componente de hompage usando exact le decimos que sólo queremos que cargue
      el componente cuando sea esa ruta y si no, que no cargue nada. */}
      <Route path = "/" component={HomePage} exact/>
      <Route path= "/about" component={AboutPage} exact/>
      <Route
          path="/articles-list"
          component={ArticlesListPage}
          exact />
      {/*Usamos :name donde pasamos un parámetro en el navegador que se pasa al componente*/}
      <Route path="/articulo/:nombre" component={ArticlePage}  />
      <Route component={NotFoundPage}/>
     </Switch>
      </div>
    </div>
      </Router>
  );
}

export default App;
