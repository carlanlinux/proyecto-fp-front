import React, {useState} from 'react';
import UsersList from "./UsersList";
import NotFoundPage from "../pages/NotFoundPage";
import {FiUserPlus} from "react-icons/all";



const Users = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usuarioExito, setUsuarioExito] = useState('');


    //Función para añadir un comentario
    const addUsuario = async (e) => {
        e.preventDefault();
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

        <div className={"container"}>
            <form className={"form-group"} role={"form"}>
                <h3>Creación de usuarios</h3>
                <hr/>
                <div className={"form-group"}>
                    <p className={"success text-success"}>{usuarioExito}</p>
                    <label className={"form-control-label"} htmlFor={"nombre"}>
                        Nombre:

                    <input id={"nombre"} className={"form-control"} type={"text"} value={username} required onChange={(event => setUsername(event.target.value))}/>
                    </label>
                    <label className={"form-control-label"} htmlFor={"email"}>
                        Email:

                    <input type={"email"} id={"email"}
                              className={"form-control"}
                              value={email}
                              required
                            onChange={(event => setEmail(event.target.value))}/>
                    </label>
                <label className={"form-control-label"} htmlFor={"password"}>
                    Contraseña:

                <input id={"password"} className={"form-control"} type={"password"} value={password} required onChange={(event => setPassword(event.target.value))}/>
                </label>
                </div>
                <div className={"btn btn-secondary"} onClick={addUsuario}><FiUserPlus/> Añadir Usuario</div>
            </form>

            <hr/>
            <h3>Lista de usuarios</h3>
            <UsersList setUsuarioExito={setUsuarioExito}/>
        </div>

    );
    } else {
        return <NotFoundPage/>
    }

}

export default Users;
