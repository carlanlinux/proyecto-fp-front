import React, {useState, useEffect} from 'react';
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import SeccionVotos from "../components/SeccionVotos";


//Campturamos el valor que nos viene en el parámetro de la URL
const ArticlePage = ({match}) => {
    const nombre = match.params.nombre;

    //*** COMPROBAMOS SI EXISTE EL ARTÍCULO ***/
    //Usamos React Hooks. Definimos la información del articúlo, que va a coger la información del servidor.
    // SetArcileinfo es la información con la que vamos a poblar la info del partículo y el objeto vacío que pasamos como argumento es el valor inicial de esa articleinfo antes de cargar algún dato que cambie su estado.
    //Se puede poner un valor por defecto de las propiedades que esperamos recibir en el article info
    const [articulo, setArticulo] = useState({ });
    const [todosArticulos, setTodosArticulos] = useState([]);




    //Añadimos los datos redicibidos por la llamada al back usando use effect, pasando params en blanco para que se pase como argumento cualquier cosa que nos llegue.
    //Useeffect se llama continuamente cada vez que el componente se actualiza y se llama en bucle infinito si se está actualizando continuamente, para eso hay que usar sus deps usando un array
    //Si el array es vacío sólo se carga cuando se carga el componente, sólo la primera vez cuando se carga el componente,
    // en este caso artículos. Para especificar que se cargue cada vez que cambie algo, tenemos que indicar en qué fijarse
    // dentro de ese array, en este caso nos interesa la url, que es la const name que hemos sacado de los parámetros de la URL
    //Usamos setArticleInfo y le indicamos los valores.
    useEffect(() => {
        //Creamos una función para traernos los datos ya que use effect no podemos hacerla async
        const fetchDataArticulo = async () => {
            //Nos traemos los datos llamando a la api y guardamos la respuesta
            const resultado  = await fetch(`/api/articulo/${nombre}`);
            //Como la respuesta incluye cosas como el código de respuesta y sólo queremos el cuerpo, la guardamos en un json
            const cuerpoRespuesta = await resultado.json();
            setArticulo(cuerpoRespuesta);
        }
        //Llamamos a la función que hemos creado

        const fetchDataTodosArticulos = async () => {
            //Nos traemos los datos llamando a la api y guardamos la respuesta
            const result  = await fetch(`/api/obtenerArticulos`);
            //Como la respuesta incluye cosas como el código de respuesta y sólo queremos el cuerpo, la guardamos en un json
            const responseBody = await result.json();
            setTodosArticulos(responseBody);

        }
        //Llamamos a la función que hemos creado
        fetchDataArticulo();
        fetchDataTodosArticulos();

    }, [nombre]);

    console.log(articulo);
    console.log(todosArticulos);
    //*** SACAMOS EL RESTO DE ARTÍCULOS PARA MOSTRARLOS ABAJO  ***/

    let articulosRelacionados = [];
    articulosRelacionados=(todosArticulos.filter( article => article.nombre !== nombre));



    //Comprobar si existe el artículo, si no pasar a not found.
    if (articulo === null) return <NotFoundPage/>;

    //Hacemos un filtro en el array para comprobar que existe ese artículo



    return (
    //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
    // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
    <>
        <h1>{articulo.titulo}</h1>
        <SeccionVotos nombreArticulo={nombre} votos={articulo.votos} setInfoArticulo={setArticulo}/>
        <p>{articulo.texto}</p>
        <h3>Otros artículos:</h3>
        <ArticlesList articles={articulosRelacionados} />
    {/*Cargamos el componente de los comentarios pasando como argumento los comentarios sacados de la info del artículo que hemos cogido de la bd*/}

   {/*


<CommentsList coment={articulo}/>
        <AddComentarioForm nombreArticulo={nombre} setInfoArticulo={setArticulo} />

        */}
    </>
    );
}

export default ArticlePage;
