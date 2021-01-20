import React, {useEffect, useState} from 'react';
import ArticlesList from "../components/ArticlesList";



const ArticlesListPage = () =>  {

//Usamos React Hooks. Definimos la información del articúlo, que va a coger la información del servidor.
// SetArcileinfo es la información con la que vamos a poblar la info del partículo y el objeto vacío que pasamos como argumento es el valor inicial de esa articleinfo antes de cargar algún dato que cambie su estado.
//Se puede poner un valor por defecto de las propiedades que esperamos recibir en el article info
    const [todosArticulos, setTodosArticulos] = useState([]);

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
            const result  = await fetch(`/api/obtenerArticulos`);
            //Como la respuesta incluye cosas como el código de respuesta y sólo queremos el cuerpo, la guardamos en un json
            const responseBody = await result.json();
            setTodosArticulos(responseBody);

        }
        //Llamamos a la función que hemos creado
        fetchData();
    }, []);


    return (
        //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
        // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
        <>
            <h1>Entradas del blog</h1>
            {/*Llamamos al componente que muestra la lista de artículos y le mandamos el fichero con los artículos como parémtro  */}
            <ArticlesList articulos={todosArticulos}/>
        </>
    )

};


export default ArticlesListPage;

