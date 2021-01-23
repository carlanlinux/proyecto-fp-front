import React from 'react';
//Importamos link para hacer los links en vez de con la etiqueta anchor de HTML
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";


const NavBar = () => {

    //Recuperamos los datos del token de sesión para pintarlo en el menú superior
    const [usuario, setUsuario] = useState('Login');
    const [tokenSesion, setTokenSesion] = useState();

    const getToken = () => {
        if (sessionStorage.getItem('token')) {
            const tokenString = sessionStorage.getItem('token');
            setTokenSesion(tokenString);
            setUsuario(tokenString);
        }
    };

    const cerrarSesiion = () => {
        sessionStorage.clear();
        setTokenSesion(null);
    }


    //Si no tenemos token sesión, llamamos a la función de obtener token

    useEffect(() => {
        if (!tokenSesion) getToken();
        console.log(tokenSesion);

    },)

    if (tokenSesion) {
        console.log("Entro al return de usuario")
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre mi</Link>
                    </li>
                    <li>
                        <Link to="/articles-list">Entradas del blog</Link>
                    </li>
                    <li>
                        <Link to="/admin">Bienvenido, {usuario}</Link>
                    </li>
                    <li>

                        <button id={"cerrarSession"} onClick={() => cerrarSesiion() }>Cerrar Sesion </button>
                    </li>

                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre mi</Link>
                    </li>
                    <li>
                        <Link to="/articles-list">Entradas del blog</Link>
                    </li>
                    <li>
                        <Link to="/admin">Login</Link>
                    </li>

                </ul>
            </nav>
        );
    }

    }


export default NavBar;



