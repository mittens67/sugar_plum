import React from 'react'

const Empty = ({image, message, altText}) => {
  return (
    <div className='flex flex-col justify-center items-center flex-1 min-h-[80vh]'>
        <img src={image} alt={altText} className='h-[200px] md:h-[300px]'/>
        <h1 className='text-xs sm:text-base font-black text-sp_pink'>{message}</h1>
    </div>
  )
}

export default Empty