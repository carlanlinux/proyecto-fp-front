import React, {useState} from 'react';
import AdminPage from "../pages/AdminPage";
import 'bootstrap';

//Recogemos en propiedades la función setToken
const Login = (props) => {


    //Guardamos en los estados el email y la contraseña junto con el token que vamos a utilizar para comprobar la sesión
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Guardamos el token de sesión en la memoria
    const [tokenSesion, setTokenSesion] = useState();


    const getToken = () => {
        if (sessionStorage.getItem('token')) {
            const tokenString = sessionStorage.getItem('token');
            setTokenSesion(tokenString);
        }
    };



    //Si hay token, entendemos que se ha iniciado sesión sin cerrar y por tanto puede ir a la página de administración sin problema
    if (tokenSesion) return <AdminPage/>
    getToken();


    //Nos traemos el cuerpo de la respuesta, que es el nombre del usuario y lo ponemos como valor del token que dirá si tenemos la sesión abierta o no
    const setToken = (cuerpoRespuesta) => {
        setTokenSesion(cuerpoRespuesta);
        sessionStorage.setItem('token',cuerpoRespuesta);

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
        }
        );
        const cuerpoRespuesta = await result.json();

        //Si el login es correcto que recibimos un status 200 ponemos el token y lo pasamos a la app por propiedades para
        // que modifique la barra de navegación
        if (result.status === 200) {
            console.log("Token:" + cuerpoRespuesta);
           setToken(cuerpoRespuesta);
           props.setTokenSesion();
        }

    };


    return (
        <div id={"add-comment-form"} className={"login-wrapper"}>
            <form onSubmit={login}>
                <h3>Login</h3>
                <label htmlFor={"email"}>
                    Nombre:
                    <input id={"email"} type={"text"} value={email} placeholder={"Introducir email"}
                           onChange={(event => setEmail(event.target.value))}/>
                </label>
                <label htmlFor={"password"}>
                    Contraseña:
                    <input id={"password"} rows={"4"} cols={"50"} value={password} type={"password"}
                           placeholder={"Introducir contraseña"}
                           onChange={(event => setPassword(event.target.value))}/>
                </label>
                <button type={"submit"}>Iniciar sesión</button>
            </form>
        </div>
    );
}
export default Login;
