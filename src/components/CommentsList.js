import React, {useEffect, useState} from 'react'

//Función que recibe los comentarios como argumentos, nos recorremos con un map un array y acada posición del array la
// pintamos con el nombre de usuario y el texto del comentario
const CommentsList = ({nombre}) => {

        const [articulo, setArticulo] = useState({"comentarios": []});


        useEffect(() => {
                //Creamos una función para traernos los datos ya que use effect no podemos hacerla async
                const fetchDataArticulo = async () => {
                        //Nos traemos los datos llamando a la api y guardamos la respuesta
                        const resultado  = await fetch(`/api/articulo/${nombre}`);
                        //Como la respuesta incluye cosas como el código de respuesta y sólo queremos el cuerpo, la guardamos en un json
                        const cuerpoRespuesta = await resultado.json();
                        setArticulo(cuerpoRespuesta);
                }
                //Llamamos a la función que hemos creado
                fetchDataArticulo();
        }, [nombre]);

        return (

            <>
                    {articulo.comentarios.map((comentario, key) => (
                        <div className={"comment"} key={key}>
                                <h4>{comentario.usuario}</h4>
                                <p>{comentario.comentario}</p>
                        </div>

                    ))}
            </>
        );
};

export default CommentsList;
