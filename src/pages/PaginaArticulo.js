import React, {useEffect, useState} from 'react';
import NotFoundPage from "./NotFoundPage";
import SeccionVotos from "../components/SeccionVotos";
import RelatedArticlesListPage from "../components/RelatedArticlesListPage";
import CommentsList from "../components/CommentsList";
import AddComentarioForm from "../components/AddComentarioForm";
import Moment from "react-moment";
import {FaComments} from "react-icons/all";

const PaginaArticulo = ({match}) => {
    const nombre = match.params.nombre;

    const [articulo, setArticulo] = useState({ });
    const[error, setError] = useState(null);
    const[mostrarForm, setMostrarForm] = useState(false);
    let numComentarios = 0;

    const interruptorForm = () => {
        setMostrarForm(!mostrarForm);
    }

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
    if (articulo.comentarios) numComentarios = articulo.comentarios.length;

    return(

            <div className={"container"}>
                <div>
                <h1>{articulo.titulo}</h1>
                    <div className="row mb-0">
                        <div className=" col-4 mb-0">
                            <p>Autor: {articulo.autor} </p>
                            <p>Fecha creación: <Moment
                                date={new Date(articulo.fechaCreacion)}
                                parse={"YYYY-MM-DD hh:mm"}
                                format={"YYYY MMM-D h:mm a"}/>
                            </p>
                            </div>
                        <div className="col-4 offset-4 mb-0">
                            <SeccionVotos nombreArticulo={nombre} votos={articulo.votos} setInfoArticulo={setArticulo}/>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="mb-3">{articulo.texto}</div>
                <div className="row">
                    <div className="col-6 text-left text-dark"><FaComments/> {numComentarios} Comentario(s) en este post. Únete a la conversación</div>
                </div>
                 <CommentsList nombre={nombre}/>
                 <hr/>
            <AddComentarioForm nombreArticulo={nombre} setInfoArticulo={setArticulo} mostrarForm={mostrarForm} interruptorForm={interruptorForm} />

            <hr/>
                <h4>Artículos relacionados</h4>
                <RelatedArticlesListPage nombre={nombre}/>
            </div>

    );
}

export default PaginaArticulo;
