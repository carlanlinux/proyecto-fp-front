import React from 'react';
import {AiFillLike} from "react-icons/all";

//El componente como parámetros el nombre del artículo (sacado de la URL params), votos sacado de la info del artículo
// de la página del artículo y pasamos otro param que nos servirá para albergar los datos del body de la request
const SeccionVotos = ({nombreArticulo, votos, setInfoArticulo}) => {

    //Hacemos una llamada post para incrementar el número de me votos de cada artículo cogiendo el nombre del artículo
 const votarArticulo = async () => {
     const result = await fetch(`/api/articulos/${nombreArticulo}/votar`, {
         method: 'post',
     })
     //Cogemos el cuerpo de la respuesta pasado a JSON
     const body = await result.json();
     //Ponemos la infor del artículo como el cuerpo de la respuesta
     setInfoArticulo(body);
 }
    //Devolvemos un botón para que llame a la función me gusta cuando se le haga click y mostramos los votos del artículo
    return (
        <div id={'upvotes-section'}>
        <h3 onClick={() => votarArticulo()}><AiFillLike/></h3>
        {/*Mostramos los datos del artículo*/}
        <p>Este artículo ha recibiddo {votos} votos</p>
        </div>
        );
};

export default SeccionVotos;
