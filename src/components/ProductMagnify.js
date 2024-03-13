import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductMagnify = ({ imgSrc, imgTitle }) => {
  return (
    <div className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]">
      <Zoom>
        <img
          alt={imgTitle}
          src={imgSrc}
          width="500"
          loading="lazy"
        />
      </Zoom>
    </div>
  );
};

export default ProductMagnify;
