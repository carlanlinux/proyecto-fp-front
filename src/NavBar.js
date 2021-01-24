import React from 'react';
//Importamos link para hacer los links en vez de con la etiqueta anchor de HTML
import {Link} from "react-router-dom";


const NavBar = (props) => {

    if (props.tokenSesion){
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
                        <Link to="/users">Gestión Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/nuevoPost">Nuevo post</Link>
                    </li>
                    <li>
                        <Link to="/gestionarArticulos">Gestionar Posts</Link>
                    </li>
                    <li>
                        Bienvenid@, {props.tokenSesion}
                    </li>
                    <li>
                        <button onClick={(e) => props.cerrarSesion()}>Cerrar Sesión</button>
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
                        <Link to="/admin">AdminArea</Link>
                    </li>

                </ul>
            </nav>
        );

    }

}


export default NavBar;



