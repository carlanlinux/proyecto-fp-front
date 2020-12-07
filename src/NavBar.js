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
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/articles-list">Articles</Link>
        </li>
    </ul>
</nav>
);

export default NavBar;



