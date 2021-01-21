import React, {useState} from 'react';
import AdminPage from "../pages/AdminPage";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Función para añadir un comentario
    const login = async () => {
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/login`, {
            method: 'post',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (result.status === 200) return (
          <>
              {console.log(result.status)}
              <AdminPage/>
          </>
        );


    }
    return (
        <div id={"add-comment-form"}>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

            <h3>Login</h3>
            <label>
                Nombre:
                <input type={"text"} value={email} onChange={(event => setEmail(event.target.value))}/>
            </label>
            <label>
                Contraseña:
                <input rows={"4"} cols={"50"} value={password} type={"password"}
                       onChange={(event => setPassword(event.target.value))}/>
            </label>
            <button onClick={() => login()}>Enviar comentario</button>
        </div>

    );
}
export default Login;
