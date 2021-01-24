//Importamos router para traernos las dependencias de la navegación
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import PaginaArticulo from "./pages/PaginaArticulo";
import Login from "./components/Login";
import 'bootstrap';
import React, {useEffect, useState} from "react";
import Users from "./components/Users";
import ArticlesListPageAdmin from "./pages/ArticlesListPageAdmin";
import NuevoPost from "./components/NuevoPost";


function App() {
    //Creamos una constante para el token y el set token que nos comprueba si la sesión está abierta
    const [tokenSesion, setTokenSesion] = useState(null);

    //Monitorizamos cada vez que el toquen de la sesión cambie y lo cogemos de la sesión del navegador de session storage
    useEffect(() => {
        const getToken = () => {
            if (sessionStorage.getItem('token')) {
                const tokenString = sessionStorage.getItem('token');
                setTokenSesion(tokenString);
            }
        };
        getToken();
        console.log("Usuario logado" + tokenSesion);
    }, [tokenSesion]);

    //Función para cerrar la sesión desde el session storage del navegador y poner el token de la sesión a null.
    // Esta función la pasamos a la navBar
    const cerrarSesion = () => {
        sessionStorage.clear();
        setTokenSesion(null);
    };

    return (
        //Envolvemos el código dentro del router component
        //Article:name --> Aquí recogemos el parámetro de la URL para poderlo utilizar en la página en cuestión
        <Router>
            <div className="App">
                {/*Cargamos el componente de la barra de navegación encima del cuerpo de la página ya que queremos que se cargue en todas las páginas*/}
                <NavBar tokenSesion={tokenSesion} cerrarSesion={cerrarSesion}/>
                <div id="page-body">

                    {/*Usamos Switch para decirle que una vez encuentre uno de los path no siga mostrando los siguientes. Aquí es importante el orden.*/}
                    <Switch>
                        {/*Le decimos que la home debe abrir el componente de hompage usando exact le decimos que sólo queremos que cargue
      el componente cuando sea esa ruta y si no, que no cargue nada. */}
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/about" component={AboutPage} exact/>
                        <Route
                            path="/articles-list"
                            component={() => <ArticlesListPage tokenSesion={tokenSesion}/>}
                            exact/>
                        {/*Usamos :name donde pasamos un parámetro en el navegador que se pasa al componente*/}
                        <Route path="/articulo/:nombre" component={PaginaArticulo}/>
                        {/*      Pasamos como componente la función de set token para que nos vuelva a la App el token en cuanto iniciemos sesión. De esta forma capturamos el estado de la sesión
      lo pasamos a la barra de navegación como props en el caso que no estuviera el usuario logado.    */}
                        <Route path="/admin" component={() => <Login setTokenSesion={setTokenSesion}/>}/>
                        <Route path="/users" component={() => <Users tokenSesion={tokenSesion}/>}/>
                        <Route path="/gestionarPost"
                               component={() => <ArticlesListPageAdmin tokenSesion={tokenSesion}/>}/>
                        <Route path="/nuevoPost" component={() => <NuevoPost tokenSesion={tokenSesion}/>}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
