import React, {useState} from 'react';
import ArticlesListPage from "../pages/ArticlesListPage";


//Recogemos en propiedades la función setToken
const Login = (props) => {


    //Guardamos en los estados el email y la contraseña junto con el token que vamos a utilizar para comprobar la sesión
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Guardamos el token de sesión en la memoria
    const [tokenSesion, setTokenSesion] = useState();
    const [mensajeError, setMensajeError] = useState("");


    const getToken = () => {
        if (sessionStorage.getItem('token')) {
            const tokenString = sessionStorage.getItem('token');
            setTokenSesion(tokenString);
        }
    };


    //Si hay token, entendemos que se ha iniciado sesión sin cerrar y por tanto puede ir a la página de administración sin problema
    if (tokenSesion) return <ArticlesListPage tokenSesion={tokenSesion}/>
    getToken();


    //Nos traemos el cuerpo de la respuesta, que es el nombre del usuario y lo ponemos como valor del token que dirá si tenemos la sesión abierta o no
    const setToken = (cuerpoRespuesta) => {
        setTokenSesion(cuerpoRespuesta);
        sessionStorage.setItem('token', cuerpoRespuesta);

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
        } else {
            setMensajeError("Usuario o contraseña introducidos incorrectos")
        }

    };

    return (
        <div className={"container"}>
        <form className={"form-group"} role={"form"} onSubmit={login}>
            <h3>Inicio de sesión</h3>
            <hr/>
            <div className={"form-group"}>
                <p className={"danger text-danger"}>{mensajeError}</p>
                <label className={"form-control-label"} htmlFor={"email"}>
                    Email:
                </label>
                    <input type={"email"} id={"email"}  className={"form-control"} name={"email"} placeholder={"Introducir email"}
                           required value={email} onChange={(event => setEmail(event.target.value))}/>

                <label className="form-control-label" htmlFor={"password"}>
                    Contraseña:
                </label>
                    <input type={"text"} id={"password"} className={"form-control"} name={"password"} value={password}
                           type={"password"}
                           placeholder={"Introducir contraseña"} required
                           onChange={(event => setPassword(event.target.value))}/>
            </div>
            <input type={"submit"} className="btn btn-secondary" value={"Iniciar sesión"}/>
        </form>
        </div>
);
}
export default Login;
