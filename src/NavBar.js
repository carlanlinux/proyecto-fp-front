import React from 'react';
//Importamos link para hacer los links en vez de con la etiqueta anchor de HTML
import {Link} from "react-router-dom";
import {FaReact, FiUsers, GrLogout} from "react-icons/all";


const NavBar = (props) => {

    if (props.tokenSesion) {
        return (
            <nav className="container navbar navbar-dark bg-dark navbar-expand-sm">
                <div className={"container"}>
                    <div className={"h4 text-white"}><FaReact/>  Desarrollo Web React</div>
                    <ul className="navbar-nav ml-sm-auto">
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/articles-list">Entradas del blog</Link>
                        </li>
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/users">Gestión Usuarios</Link>
                        </li>
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/nuevoPost">Nuevo post</Link>
                        </li>
                        <li className="nav-item nav-link" href="#mission">
                            Bienvenid@, {props.tokenSesion}
                        </li>

                        <form className="form-inline">
                            <button className="btn btn-outline-light" onClick={(e) => props.cerrarSesion()}><GrLogout className={"white-text"}/> Cerrar Sesión</button>
                        </form>
                    </ul>
                </div>
            </nav>
        );
    } else {

        return (

            <nav id="navbar-site" className="container navbar navbar-dark bg-dark navbar-expand-sm">
                <div className={"container"}>
                    <div className={"h4 text-white"}><FaReact/>  Desarrollo Web React</div>
                    <ul className="navbar-nav ml-sm-auto">
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/articles-list">Entradas del blog</Link>
                        </li>
                        <li className="nav-item nav-link" href="#mission">
                            <Link to="/admin"><FiUsers/>AdminArea</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );

    }

}


export default NavBar;



