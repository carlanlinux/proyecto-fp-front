import React from 'react';


//Nos traemos como parámetro la lista de artículos que nos manda desde la página de article listPage.
const CerrarSesion = (props) =>  {

    sessionStorage.clear();
    props.setTokenSesion(null);

    return true;

}

export default CerrarSesion;
