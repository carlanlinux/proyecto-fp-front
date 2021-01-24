import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaTimes} from "react-icons/all";

//Nos traemos como parámetro la lista de artículos que nos manda desde la página de article listPage.
const ArticlesList = ({articulos, tokenSesion}) => {

    const [articulo, setArticulo] = useState([]);

    const borrararticulo = async (articulo) => {
        console.log(articulo)
        //Lllamamos a la API por post y se le dice que el cuerpo es un JSON donde se pase
        // el nombre de uusuario y el texto del comentario y se le indican las cabeceeras.
        const result = await fetch(`/api/borrarPost`, {
                method: 'post',
                body: JSON.stringify({"nombre": articulo}),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        if (result.status === 200) {
            console.log("Usuario " + articulo + "borrado");
        }
    }

    if (tokenSesion) {
        return (
            <>
                {articulos.map((articulo, key) => (
                    <div className="comment col media py-3" key={key}>
                        <div className="mr-3">
                            <button className="pet-delete btn btn-sm btn-danger"
                                    onClick={() => borrararticulo(articulo.nombre)}>
                                {/*Importamos de la libreria react icons iconos para mejorar el aspecto de la web. En este caso la X*/}
                                <FaTimes/>
                            </button>
                        </div>
                        <Link className={"article-list-item"} key={key} to={`/articulo/${articulo.nombre}`} >
                            <h3>{articulo.titulo}</h3>
                            <p>{articulo.texto.substring(0,150)}...</p>
                        </Link>
                    </div>

                ))}
            </>

        );
    } else {
        return (
            <>
                {/*
        //Hacemos un map del array de artículos para sacar su título. Y Después usamos el Rotuer de React para crear
        los links que dirigan a cada artículo
*/}
                {articulos.map((articulo, key) => (
                    <Link className={"article-list-item"} key={key} to={`/articulo/${articulo.nombre}`} >
                        <h3>{articulo.titulo}</h3>
                        <p>{articulo.texto.substring(0,150)}...</p>
                    </Link>
                ))}
            </>
        )
    }

};
export default ArticlesList;
