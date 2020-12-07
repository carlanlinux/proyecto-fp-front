import React from 'react';
import articleContent from './articleContent';
import {Link} from "react-router-dom";


const ArticlesList = () => (
    //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
    // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
    <>
        <h1>Articles</h1>
{/*
        //Hacemos un map del array de artículos para sacar su título. Y Después usamos el Rotuer de React para crear
        los links que dirigan a cada artículo
*/}
        {articleContent.map((article, key) => (
            <Link className={"article-list-item"} key={key} to={`/article/${article.name}`} >
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
            </Link>
        ))}
    </>
);

export default ArticlesList;
