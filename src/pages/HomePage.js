import React from 'react';

const HomePage = () => (
    //<> </> Shorthand de <react.Fragment> Poner dentro el contenido </react.Fragment>==> Envolvemos las líneas de código
    // con <> para exportarlo sin tener que usar divs. De normal para exportar varios niveles se tiene que envolver en div
    <>
        <h1>Hola, Bienvenid@ al Blog</h1>
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
    </>
);

export default HomePage;
