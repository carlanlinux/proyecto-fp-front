import React from 'react'

//Función que recibe los comentarios como argumentos, nos recorremos con un map un array y acada posición del array la
// pintamos con el nombre de usuario y el texto del comentario
const CommentsList = ({articulo}) => {
        return (

<>
<p>{articulo.nombre}</p>
{/*    {coment.map((comentario, key) => (
        <div className={"comment"} key={key}>
            <h4>{comentario.usuario}</h4>
            <p>{comentario.comentario}</p>
        </div>
        ))}*/}
</>
        );
};
export default CommentsList;
