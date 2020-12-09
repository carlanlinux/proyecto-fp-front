import React from 'react';
import articleContent from './articleContent';
import ArticlesList from "../components/ArticlesList";


const ArticlesListPage = () => (
    //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
    // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
    <>
        <h1>Entradas del blog</h1>
        {/*Llamamos al componente que muestra la lista de artículos y le mandamos el fichero con los artículos como parémtro*/}
            <ArticlesList articles={articleContent}/>
    </>
);

export default ArticlesListPage;
