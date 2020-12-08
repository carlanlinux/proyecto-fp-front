import React from 'react'

//Función que recibe los comentarios como argumentos, nos recorremos con un map un array y acada posición del array la
// pintamos con el nombre de usuario y el texto del comentario
const CommentsList = ({comentarios}) => (
<>
    {comentarios.map((comentario, key) => (
        <div className={"comment"} key={key}>
            <h4>{comentario.username}</h4>
            <p>{comentario.text}</p>
        </div>
        ))}
</>
        );

export default CommentsList;
