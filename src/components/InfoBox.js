import React from 'react'

const InfoBox = ({title, info, containerClass}) => {
  return (
    <div className={`${containerClass}`}>
        <h2 className='font-semibold text-sm md:text-base'>{title}</h2>
        <p className='mt-[5px] text-sm md:text-base'>{info}</p>
    </div>
  )
}

export default InfoBox;