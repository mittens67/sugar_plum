import React from 'react'

const Button2 = ({text, customClass}) => {
  return (
    <button className={`bg-transparent font-bold underline ${customClass}`}>
        {text}
    </button>
  )
}

export default Button2