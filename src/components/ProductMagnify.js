import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ProductMagnify = ({imgSrc, imgSrcSmall}) => {
  return (
    <div className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]'>
    <ReactImageMagnify 
    {...{
        smallImage: {
            alt: 'Red Velvet',
            src: imgSrcSmall,
            isFluidWidth: true
        },
        largeImage: {
            src: imgSrc,
            width: 900,
            height: 900
        },
        enlargedImageContainerDimensions: {
          width: '100%',
          height: '100%'
        }
    }}
    />
    </div>
  )
}

export default ProductMagnify;