import React from 'react'

const Button = ({ fetchData, call }) => {
console.log(call)

  return(
    <button onClick={()=> fetchData(call, 'data')}>{call}</button>
  )
}

export default Button;
