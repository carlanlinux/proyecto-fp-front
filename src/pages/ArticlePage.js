import React from 'react';
import articleContent from './articleContent';
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";


//Campturamos el valor que nos viene en el parámetro de la URL
const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    if (!article) return <NotFoundPage/>

    const otherArticles = articleContent.filter( article => article.name !== name);

    return (
    //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
    // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
    <>
        <h1>{article.title}</h1>

{/*       Cada párrafo del artículo es una posición del array que contiene el artículo completo. Para sacar los paárrafos hacemos un map.
        we're going to want to map our article's content property, which is a bunch of strings representing paragraphs,
        to a bunch of JSX elements. And that'll look like this. .map(paragraph, and we'll put two paragraph tags and put
        the paragraph string in between it. and put the paragraph string in between it. And since React wants us to assign
        a key prop to our elements whenever we use map, we just have to add a key argument to our map function. And then
        we add that key prop to the paragraph elements here.*/}

        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
            )
        )}
        <h3>Otros artículos:</h3>
        <ArticlesList articles={otherArticles} />
    </>
    );
};

export default ArticlePage;
