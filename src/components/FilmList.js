import React from 'react';
import Film from './Film';


const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return(
            <Film name={Film.name} key={Film.id}>{Film.url}</Film>
        )
    })
    
  return (
    <>
      <h1>I am a FilmList</h1>
  {filmArray}
  </>
  );
}

export default FilmList;