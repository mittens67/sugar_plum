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

  // const packageType =
  //   product.productType === PRODUCT_SNACK ? `Pieces` : `Weight`;
  // const packageSize =
  //   product.productType === PRODUCT_SNACK
  //     ? product.packageSize * 1
  //     : product.packageSize * 0.5;
  // const packageUnit = product.productType === PRODUCT_SNACK ? `Piece` : `Kg`;
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
            <h3 className="font-semibold leading-6">{product.itemName}</h3>
            <p className="font-bold leading-6">
              &#x20B9;{product.basePrice * product.packageSize}
            </p>
            <p className=" text-gray-500">
              {packageType}{" "}
              <span className="text-black">
                : {`${productSize} ${packageUnit}`}
              </span>
            </p>
            {product.customFlavor && (
              <p className=" text-gray-500">
                Flavor <span className="text-black">: {flavor}</span>
              </p>
            )}
            {product.message && (
              <p className=" text-gray-500">
                Message <span className="text-black">:{product.message}</span>
              </p>
            )}
          </div>
        </div>
        </Link>
        <div
          className="self-center"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          <i className="fa fa-trash text-sp_pink cursor-pointer hover:text-black hover:transition-all"></i>
        </div>
      </div>
  );
};

export default CartItems;
