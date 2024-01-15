import React from 'react'

const Hr = ({customClass}) => {
  return (
    <hr className={`h-[3px] border-sp_pink ${customClass}`}/>
  )
}

export default Hr