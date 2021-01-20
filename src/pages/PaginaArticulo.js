import React, {useState, useEffect} from 'react';
import NotFoundPage from "./NotFoundPage";
import SeccionVotos from "../components/SeccionVotos";
import RelatedArticlesListPage from "./RelatedArticlesListPage";
import CommentsList from "../components/CommentsList";
import AddComentarioForm from "../components/AddComentarioForm";

const PaginaArticulo = ({match}) => {
    const nombre = match.params.nombre;

    const [articulo, setArticulo] = useState({ });

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


        fetchDataArticulo();


    }, [nombre]);

    if (articulo === null) return <NotFoundPage/>;


    return(
        <>
                <h1>{articulo.titulo}</h1>
                <SeccionVotos nombreArticulo={nombre} votos={articulo.votos} setInfoArticulo={setArticulo}/>
                <p>{articulo.texto}</p>
                <h3>Otros artículos:</h3>
                <RelatedArticlesListPage nombre={nombre}/>
                 <CommentsList nombre={nombre}/>
            <AddComentarioForm nombreArticulo={nombre} setInfoArticulo={setArticulo} />
        </>
    );
}

export default PaginaArticulo;
