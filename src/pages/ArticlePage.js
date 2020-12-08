import React, {useState, useEffect} from 'react';
import articleContent from './articleContent';
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";


//Campturamos el valor que nos viene en el parámetro de la URL
const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    //Usamos React Hooks. Definimos la información del articúlo, que va a coger la información del servidor.
    // SetArcileinfo es la información con la que vamos a poblar la info del partículo y el objeto vacío que pasamos como argumento es el valor inicial de esa articleinfo antes de cargar algún dato que cambie su estado.
    //Se puede poner un valor por defecto de las propiedades que esperamos recibir en el article info
    const [articleInfo, setARticleInfo] = useState({ votos: 0, comentarios: []});

    //Añadimos los datos redicibidos por la llamada al back usando use effect, pasando params en blanco para que se pase como argumento cualquier cosa que nos llegue.
    //Useeffect se llama continuamente cada vez que el componente se actualiza y se llama en bucle infinito si se está actualizando continuamente, para eso hay que usar sus deps usando un array
    //Si el array es vacío sólo se carga cuando se carga el componente, sólo la primera vez cuando se carga el componente,
    // en este caso artículos. Para especificar que se cargue cada vez que cambie algo, tenemos que indicar en qué fijarse
    // dentro de ese array, en este caso nos interesa la url, que es la const name que hemos sacado de los parámetros de la URL
    //Usamos setArticleInfo y le indicamos los valores.
    useEffect(() => {
        //Creamos una función para traernos los datos ya que use effect no podemos hacerla async
        const fetchData = async () => {
            //Nos traemos los datos llamando a la api y guardamos la respuesta
            const result  = await fetch(`/api/articles/${name}`);
            //Como la respuesta incluye cosas como el código de respuesta y sólo queremos el cuerpo, la guardamos en un json
            const responseBody = await result.json();
            setARticleInfo(responseBody);
        }
        //Llamamos a la función que hemos creado
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage/>

    const otherArticles = articleContent.filter( article => article.name !== name);

    return (
    //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
    // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
    <>
        <h1>{article.title}</h1>

        {/*Mostramos los datos del artículo*/}
        <p>Este artículo ha recibiddo {articleInfo.votos} votos</p>
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

    {/*Cargamos el componente de los comentarios pasando como argumento los comentarios sacados de la info del artículo que hemos cogido de la bd*/}
        <CommentsList comentarios={articleInfo.comentarios}/>
        <h3>Otros artículos:</h3>
        <ArticlesList articles={otherArticles} />
    </>
    );
};

export default ArticlePage;
