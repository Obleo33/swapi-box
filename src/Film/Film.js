import React from 'react';



const Film = ( { filmData } ) => {
  if(filmData){
    return(
      <div>
        <p>{filmData.opening_crawl}</p>
        <p>{filmData.title}</p>
        <p>{filmData.release_date}</p>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default Film;
