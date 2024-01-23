import React from 'react'

const Hr = ({customClass}) => {
  return (
    <hr className={`h-[3px] border-secondary-500 ${customClass}`}/>
  )
}

export default Hr