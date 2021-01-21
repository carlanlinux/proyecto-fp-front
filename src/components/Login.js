import React, {useState} from 'react';
import AdminPage from "../pages/AdminPage";
import SignUp from "../components/SignUp";
import PropTypes from 'prop-types';
import 'bootstrap';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Guardamos el token de sesión en la memoria
    const [tokenSesion, setTokenSesion] = useState();

    //Si no hay token cargamos el toquen de iniciar sesión
 if (tokenSesion) {
            return <AdminPage/>
        }

    //Función para añadir un comentario
    const login = async e => {
        e.preventDefault();
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/login`, {
            method: 'post',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (result.status === 200) setTokenSesion(result);

    }



    return (
        <div id={"add-comment-form"} className={"login-wrapper"}>
            <form onSubmit={login}>
            <h3>Login</h3>
            <label htmlFor={email}>
                Nombre:
                <input id={email} type={"text"} value={email} placeholder={"Introducir email"}
                       onChange={(event => setEmail(event.target.value))}/>
            </label>
            <label htmlFor={password}>
                Contraseña:
                <input id={password} rows={"4"} cols={"50"} value={password} type={"password"} placeholder={"Introducir contraseña"}
                       onChange={(event => setPassword(event.target.value))}/>
            </label>
            <button type={"submit"}>Iniciar sesión</button>
            </form>
        </div>
    );
}
export default Login;
