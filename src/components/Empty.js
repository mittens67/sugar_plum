import React from 'react'

const Empty = ({image, message, altText}) => {
  return (
    <div className='bg-white flex flex-col justify-center items-center flex-1 min-h-[80vh]'>
        <img src={image} alt={altText} className='h-[200px] md:h-[300px]'/>
        <h1 className='text-xs sm:text-base font-black text-secondary-500'>{message}</h1>
    </div>
  )
}

export default Empty