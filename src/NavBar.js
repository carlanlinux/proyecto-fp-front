import React from 'react';
//Importamos link para hacer los links en vez de con la etiqueta anchor de HTML
import {Link} from "react-router-dom";


const NavBar = () => (
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
    </ul>
</nav>
);

export default NavBar;



