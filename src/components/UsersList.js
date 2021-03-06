import React, {useEffect, useState} from 'react'
import {FaTimes} from "react-icons/all";

//Función que recibe los comentarios como argumentos, nos recorremos con un map un array y acada posición del array la
// pintamos con el nombre de usuario y el texto del comentario
const UsersList = () => {

        const [usuarios, setUsuarios] = useState([]);



        const borrarUsuario = async (emailUsuario) => {
                console.log(emailUsuario)
                        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
                        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
                        const result = await fetch(`/api/borrarUsuario`, {
                                    method: 'post',
                                    body: JSON.stringify({"email": emailUsuario}),
                                    headers: {
                                            'Content-Type': 'application/json',
                                    }
                            }
                        );

                        if (result.status === 200) {
                                console.log("Usuario " + emailUsuario + "borrado");

                        }

        }


        useEffect(() => {
                //Creamos una función para traernos los datos ya que use effect no podemos hacerla async
                const fetchDataUsers = async () => {
                        //Nos traemos los datos llamando a la api y guardamos la respuesta
                        const resultado  = await fetch(`/api/obtenenerTodosUsuarios`);
                        //Como la respuesta incluye cosas como el código de respuesta y sólo queremos el cuerpo, la guardamos en un json
                        const cuerpoRespuesta = await resultado.json();
                        console.log(cuerpoRespuesta)
                        setUsuarios(cuerpoRespuesta);
                }
                //Llamamos a la función que hemos creado
                fetchDataUsers();
        }, );

        return (

            <>
                    {usuarios.map((usuario, key) => (
                        <div className="comment col media py-3" key={key}>
                                <div className="mr-3">
                                        <button className="pet-delete btn btn-sm btn-danger"
                                                onClick={() => borrarUsuario(usuario.email)}>
                                                {/*Importamos de la libreria react icons iconos para mejorar el aspecto de la web. En este caso la X*/}
                                                <FaTimes/>
                                        </button>

                                </div>
                                <h4>{usuario.nombreUsuario}</h4>



                                <p>
                                        {usuario.email}</p>
                        </div>

                    ))}
            </>
        );
};

export default UsersList;
