import React from 'react'

const Button = ({ fetchData, call }) => {


  return(
    <button onClick={()=> fetchData(call, 'data')}>{call}</button>
  )
}

export default Button;
