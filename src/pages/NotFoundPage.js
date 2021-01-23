import React from 'react';
import { useLocation} from 'react-router-dom';

const NotFoundPage = () => {
    const location = useLocation();
    console.log(location);

    return(
        <div>
            <h1>404: Página no encontrada</h1>
            <h1>Recurso no encontrado en {location.pathname}</h1>
        </div>
    )
};

export default NotFoundPage;
