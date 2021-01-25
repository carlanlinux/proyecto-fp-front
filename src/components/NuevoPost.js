import React, {useState} from 'react';
import NotFoundPage from "../pages/NotFoundPage";




const NuevoPost = (props) => {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [usuarioExito, setUsuarioExito] = useState('');


    //Función para añadir un comentario
    const addPost = async (e) => {
        e.preventDefault();
        const nombrePost = titulo.replaceAll(" ", "-");
        const fecha = Date.now();
        console.log("fecha" + fecha + "Y nombre post" + nombrePost);
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/articulos/nuevoArticulo`, {
            method: 'post',
            body: JSON.stringify({
                nombre: nombrePost,
                texto: texto,
                titulo: titulo,
                fechaCreacion: fecha,
                autor: props.tokenSesion}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        //El cuerpo es el resultado pasado a json.
        const body = await result.json();
        if (result.status === 200) {
            //Se dejan en blanco nuevamente los campos del formulario y se saca mensaje de Exito
            setUsuarioExito("Nuevo post subido correctamente");
            setTitulo('');
            setTexto('');

        }


    }
    if (props.tokenSesion) {

    return (
        <div className={"container"}>
        <form className={"form-group"} role={"form"} onSubmit={addPost}>
            <h3>Crear un nuevo post</h3>
            <hr/>
            <div className={"form-group"}><p className={"success text-success"}>{usuarioExito}</p>
            <label className={"form-control-label"} htmlFor={"nombre"}>
                Título:
            </label>
                <input id={"nombre"} className="form-control" type={"text"} value={titulo}
                       required onChange={(event => setTitulo(event.target.value))}/>

            <label className="form-control-label" htmlFor={"textoPost"}>
                Texto:
            </label>
                <textarea id={"textoPost"}
                       className={"form-control"}
                       value={texto}
                       required
                       rows={"5"}
                       cols={"20"}
                       onChange={(event => setTexto(event.target.value))}/>
            </div>
            <input type={"submit"} className="btn btn-secondary" value={"Crear Post"}/>

        </form>
        </div>

    );
    } else {
        return <NotFoundPage/>
    }

}

export default NuevoPost;
