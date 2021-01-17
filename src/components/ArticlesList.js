import React from 'react';
import {Link} from "react-router-dom";

//Nos traemos como parámetro la lista de artículos que nos manda desde la página de article listPage.
const ArticlesList = ({articles}) => (

<>
    {/*
        //Hacemos un map del array de artículos para sacar su título. Y Después usamos el Rotuer de React para crear
        los links que dirigan a cada artículo
*/}
    {articles.map((article, key) => (
        <Link className={"article-list-item"} key={key} to={`/article/${article.name}`} >
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0,150)}...</p>
        </Link>
    ))}
</>
);
export default ArticlesList;
