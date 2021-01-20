import React from 'react';
import {Link} from "react-router-dom";

//Nos traemos como parámetro la lista de artículos que nos manda desde la página de article listPage.
const ArticlesList = ({articulos}) => (

<>
    {/*
        //Hacemos un map del array de artículos para sacar su título. Y Después usamos el Rotuer de React para crear
        los links que dirigan a cada artículo
*/}
    {articulos.map((articulo, key) => (
        <Link className={"article-list-item"} key={key} to={`/articulo/${articulo.nombre}`} >
            <h3>{articulo.titulo}</h3>
            <p>{articulo.texto.substring(0,150)}...</p>
        </Link>
    ))}
</>
);
export default ArticlesList;
