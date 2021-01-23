import React, {useState} from 'react';
import NotFoundPage from "../pages/NotFoundPage";
import Moment from "react-moment";



const NuevoPost = (props) => {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [nombrePostBD, setnombrePostBD] = useState('');
    const [usuarioExito, setUsuarioExito] = useState('');


    //Función para añadir un comentario
    const addUsuario = async () => {
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/nuevoUsuario`, {
            method: 'post',
            body: JSON.stringify({nombre: nombrePostBD, texto: texto, titulo: titulo, fechaCreacion:     <Moment
                    date={Date.now()}
                    parse={"YYYY-MM-DD hh:mm"}
                    format={"MMM-D h:mm a"}
                />, autor: props.tokenSesion}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        //El cuerpo es el resultado pasado a json.
        const body = await result.json();
        if (result.status === 200) {
            //Se dejan en blanco nuevamente los campos del formulario y se saca mensaje de Exito
            setUsuarioExito("Usuario dado de alta correctamente");
            setTitulo('');
            setTexto('');

        }


    }
    if (props.tokenSesion) {

    return (
        <>
        <form id={"add-comment-form"}>
            <h3>Crear un nuevo post</h3>
            <div><span className={"success text-success"}>{usuarioExito}</span></div>
            <label htmlFor={"nombre"}>
                Nombre:
                <input id={"nombre"} type={"text"} value={titulo} required onChange={(event => setTitulo(event.target.value))}/>
            </label>
            <label htmlFor={"textoPost"}>
                Texto:
                <input id={"textoPost"} type={"textarea"} value={texto} required
                          onChange={(event => setTexto(event.target.value))}/>
            </label>
            <button onClick={() => addUsuario()}>Crear usuario</button>
        </form>

            </>
    );
    } else {
        return <NotFoundPage/>
    }

}

export default NuevoPost;
