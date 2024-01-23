import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import {
  FLAVOR_BUTTERSCOTCH,
  FLAVOR_CHOCOLATE,
  FLAVOR_STRAWBERRY,
  FLAVOR_VANILLA,
  PRODUCT_SNACK,
} from "../utils/constants";

const CartItems = ({ product }) => {

  const dispatch = useDispatch();
  let packageType = null, productSize = null, packageUnit = ``;
  const flavor =
    product.customFlavor === FLAVOR_BUTTERSCOTCH
      ? `Butterscotch`
      : product.customFlavor === FLAVOR_CHOCOLATE
      ? `Chocolate`
      : product.customFlavor === FLAVOR_STRAWBERRY
      ? `Strawberry`
      : product.customFlavor === FLAVOR_VANILLA
      ? `Vanilla`
      : ``;

  if(product.productType === PRODUCT_SNACK) {
    packageType = `Pieces`;
    productSize = product.packageSize * 1;
    packageUnit = ``;
  } else {
    packageType = `Weight`;
    productSize = product.packageSize * 0.5;
    packageUnit = `Kg`
  }

  return (
    
      <div className="flex justify-between mt-[15px]">
        <Link to={`/product/${product.id}`}>
        <div className="text-xs sm:text-sm flex-1 flex justify-between">
          <img
            src={product.image}
            alt="item"
            className="h-[80px] mr-[10px] sm:h-[130px] sm:mr-[20px] rounded-lg sm:rounded-xl"
          />
          <div>
            <h3 className="font-semibold leading-6 text-secondary-500">{product.itemName}</h3>
            <p className="font-bold leading-6 text-secondary-500">
              &#x20B9;{product.basePrice * product.packageSize}
            </p>
            <p className=" text-text-700">
              {packageType}{" "}
              <span className="text-text-900">
                : {`${productSize} ${packageUnit}`}
              </span>
            </p>
            {product.customFlavor && (
              <p className=" text-text-700">
                Flavor <span className="text-text-900">: {flavor}</span>
              </p>
            )}
            {product.message && (
              <p className=" text-text-700">
                Message <span className="text-text-900">:{product.message}</span>
              </p>
            )}
          </div>
        </div>
        </Link>
        <div
          className="self-center"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          <i className="fa fa-trash text-secondary-500 cursor-pointer hover:text-primary-800 hover:transition-all"></i>
        </div>
      </div>
  );
};

export default CartItems;
