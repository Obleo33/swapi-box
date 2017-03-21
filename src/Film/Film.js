import React from 'react';



const Film = ( { filmData } ) => {
  if(filmData){
    console.log(filmData)
    const random = Math.floor((Math.random() * filmData.length) )
    return(
      <div>
        <p>{filmData[random].opening_crawl}</p>
        <p>{filmData[random].title}</p>
        <p>{filmData[random].release_date}</p>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default Film;
