import React from 'react';

const Film = ( { filmData } ) => {
if(filmData){
  const random = Math.floor((Math.random() * filmData.length) )
  console.log(random);
  return(
    <div>{filmData[random].opening_crawl}</div>
  )
} else {
  return(
    <div></div>
  )
}
}

export default Film;
