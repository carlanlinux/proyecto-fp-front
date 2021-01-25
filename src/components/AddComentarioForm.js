import React, {useState} from 'react';
import {AiFillPlusCircle} from "react-icons/all";

const AddComentarioForm = ({nombreArticulo, setInfoArticulo, interruptorForm, mostrarForm}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');
    //recogemos el valor de mostrar u ocultar el formulario de las props y en función de eso le añadimos el CSS para que
    // se muestre o no en el div contenedor.
    let css = mostrarForm ? "" : "add-appointment";

    //Función para añadir un comentario
    const addComment = async (e) => {
        e.preventDefault();
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/articulos/${nombreArticulo}/comentar`, {
            method: 'post',
            body: JSON.stringify({usuario: username, comentario: commentText}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        //El cuerpo es el resultado pasado a json.
        const body = await result.json();
        setInfoArticulo(body);
        //Se dejan en blanco nuevamente los campos del formulario
        setUsername('');
        setCommentText('');
        interruptorForm();
    }

    return (
        <div id={"comentarios"} className={"card textcenter mt-3 " + css}>
            <div className="apt-addheading card-header bg-secondary text-white" onClick={interruptorForm}>
                <AiFillPlusCircle/> Añadir comentario </div>
            <div className="card-body">
            <form className={"form-group"} onSubmit={addComment}>
                <label className={"form-control-label"} htmlFor={"username"}>
                    Usuario:
                </label>
                <input id={"username"} className="form-control" type={"text"} required value={username} onChange={(event => setUsername(event.target.value))}/>
                <label className={"form-control-label"} htmlFor={"comentario"}>
                    Comentario:
                </label>
                <textarea id={"comentario"}
                          className={"form-control"} rows={"4"} cols={"50"} value={commentText} required
                          onChange={(event => setCommentText(event.target.value))}/>
            <input className="btn btn-secondary" type={"submit"} value={"Enviar comentario"}/>
            </form>
            </div>
        </div>


    );
}

export default AddComentarioForm;
