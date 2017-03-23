import React from 'react';



const Film = ( { filmData } ) => {
  if(filmData){
    return(
      <div>
        <p>{filmData.opening_crawl}</p>
        <h3>{filmData.title}</h3>
        <h4>{filmData.release_date}</h4>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default Film;
