import logo from './logo.svg';
//Importamos router para traernos las dependencias de la navegación
import {BrowserRouter as Router,
        Route
} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";

function App() {
  return (
      //Envolvemos el código dentro del router component
      //Article:name --> Aquí recogemos el parámetro de la URL para poderlo utilizar en la página en cuestión
      <Router>
    <div className="App">
      {/*Cargamos el componente de la barra de navegación encima del cuerpo de la página ya que queremos que se cargue en todas las páginas*/}
      <NavBar/>
      <div id="page-body">
      {/*Le decimos que la home debe abrir el componente de hompage usando exact le decimos que sólo queremos que cargue
      el componente cuando sea esa ruta y si no, que no cargue nada*/}
      <Route path = "/" component={HomePage} exact />
      <Route path= "/about" component={AboutPage} exact />
      <Route path="/articles-list" component={ArticlesList} exact />
      <Route path="/article" component={ArticlePage} exact />
      </div>
    </div>
      </Router>
  );
}

export default App;
