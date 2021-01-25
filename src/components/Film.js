import React from 'react';

const Film = ({name, children}) => {

    return(
        <>
        <h4>{children}</h4>
        <p>{name}</p>
        </>
    );
}

export default Film;