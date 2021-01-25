import React from 'react';
import logoReact from '../img/reactAnimado.gif'
import ArticlesListPageReducido from "./ArticlesListPageReducido";

const HomePage = () => {

    return (

        //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
        // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
        <div className={"container"}>
            <div className="row">
                <div className="row col-6 align-content-center justify-content-center">
                    <div>                    <h1>React JS</h1>
                        <img src={logoReact} width={300} height={300} alt={"Logo React"}/>
                        <h1>Encuentra todo lo que necesitas saber</h1></div>
                </div>
                <div className=" col ">
                    <ArticlesListPageReducido/>
                </div>
            </div>
        </div>

)
};

export default HomePage;
