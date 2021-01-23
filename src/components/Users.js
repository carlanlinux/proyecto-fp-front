import React, {useState} from 'react';
import UsersList from "./UsersList";
import NotFoundPage from "../pages/NotFoundPage";



const Users = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usuarioExito, setUsuarioExito] = useState('');


    //Función para añadir un comentario
    const addUsuario = async () => {
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/nuevoUsuario`, {
            method: 'post',
            body: JSON.stringify({nombre: username, email: email, password: password}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        //El cuerpo es el resultado pasado a json.
        const body = await result.json();
        if (result.status === 200) {
            //Se dejan en blanco nuevamente los campos del formulario y se saca mensaje de Exito
            setUsuarioExito("Usuario dado de alta correctamente");
            setUsername('');
            setPassword('');
            setEmail('');
        }

    }
    if (props.tokenSesion) {

    return (
        <>
        <form id={"add-comment-form"}>
            <h3>Añadir un usuarioo</h3>
            <div><span className={"success text-success"}>{usuarioExito}</span></div>
            <label htmlFor={"nombre"}>
                Nombre:
                <input id={"nombre"} type={"text"} value={username} required onChange={(event => setUsername(event.target.value))}/>
            </label>
            <label htmlFor={email}>
                Email:
                <input id={"email"} type={email} value={email} required
                          onChange={(event => setEmail(event.target.value))}/>
            </label>
            <label htmlFor={password}>
                Contraseña:
                <input id={"password"} value={password} required
                       onChange={(event => setPassword(event.target.value))}/>
            </label>
            <button onClick={() => addUsuario()}>Crear usuario</button>
        </form>
                <UsersList/>
            </>
    );
    } else {
        return <NotFoundPage/>
    }

}

export default Users;
