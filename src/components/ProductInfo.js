import { Link } from 'react-router-dom';

import Hr from "./Hr";
import Button1 from "./Button1";
import TextBox from "./TextBox";
import InfoBox from "./InfoBox";
import Selector from "./Selector";
import { PRODUCT_CUSTOM, PRODUCT_SNACK } from "../utils/constants";

const ProductInfo = ({
  product,
  customization,
  changePackageSize,
  changeCustomFlavor,
  changeMessage,
  onSubmitHandler,
  buttonText
}) => {
  const messageOption = product.productType !== PRODUCT_SNACK ? true : false;
  const {packageSize,customFlavor,message} = customization;
  const isCustomFlavorAvailable =
    product.productType === PRODUCT_CUSTOM ? true : false;
  

  return (
    <div className="flex-1 flex flex-col self-start md:mx-[30px]">
      <h1 className="font-black text-base md:text-xl leading-6 text-secondary-500">
        {product.itemName}
      </h1>
      <p className="font-extrabold text-xs md:text-sm leading-9">
        {product.avgRating}
        <i className="fa-solid fa-star text-accent-300 m-[2px]"></i>{" "}
        <span className="font-normal text-xs text-secondary-600">
          ({product.ratings} reviews)
        </span>
      </p>
      <Hr customClass={`border-dotted my-[10px]`} />
      <p className="font-extrabold text-sm md:text-base">
        &#x20B9;{product.basePrice * packageSize}
      </p>
      <Selector
        prompt={`Select Package:`}
        options={product.packageSize}
        currentValue={packageSize}
        setCurrentValue={changePackageSize}
      />
      {isCustomFlavorAvailable && (
        <Selector
          prompt={`Select Flavor:`}
          options={product.flavourOptions}
          currentValue={customFlavor}
          setCurrentValue={changeCustomFlavor}
        />
      )}
      {messageOption && (
        <TextBox
          title={`Message`}
          placeholder={`Message upto 20 characters......`}
          containerClass={`mt-[20px]`}
          textAreaClass={`text-secondary-500 border border-secondary-300 rounded focus:outline-none focus:border-secondary-500 text-sm md:text-base`}
          maxLength={20}
          message={message}
          changeMessage={changeMessage}
        />
      )}
      <InfoBox
        title={`Product Information:`}
        info={product.info}
        containerClass={`my-[20px]`}
      />
      <Link to={`/bag`}>
        <Button1 text={buttonText} customClass={"w-[200px] py-[5px] text-sm md:text-base"} onSubmit={onSubmitHandler}/>
      </Link>
    </div>
  );
};

export default ProductInfo;
