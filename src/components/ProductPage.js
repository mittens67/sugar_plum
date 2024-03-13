import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { callApi } from "../utils/CallApi";
import ProductMagnify from "./ProductMagnify";
import ProductInfo from "./ProductInfo";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { FLAVOR_STRAWBERRY, PRODUCT_CUSTOM } from "../utils/constants";

const ProductPage = () => {
  // Gets the product ID from the url
  const { id } = useParams();

  // Stores the results of API call
  const [product, setProduct] = useState(null);
  // We will be using this to determine the Button Text
  const [prodInCart, setProdInCart] = useState(false);

  const dispatch = useDispatch();
  // The current state of our cartSlice
  const productsInCart = useSelector((state) => state.cart.products);

  // Keeps track of the user customizations
  const [userCustomizations, setUserCustomizations] = useState({
    packageSize: 1,
    customFlavor: null,
    message: "",
  });

  // will send an update to our Redux store on cicking Add / Update button
  const handleSubmit = () => {
    const newCartValues = {
      id: product.id,
      itemName: product.itemName,
      packageSize: userCustomizations.packageSize,
      customFlavor: userCustomizations.customFlavor,
      message: userCustomizations.message,
      basePrice: product.basePrice,
      productType: product.productType,
      image: product.imageMedium,
    };

    dispatch(addToCart(newCartValues));
  };

  // handlers for user customizations
  const handleSetPackageSize = (value) => {
    setUserCustomizations({
      ...userCustomizations,
      packageSize: parseInt(value),
    });
  };

  const handleCustomFlavor = (value) => {
    setUserCustomizations({
      ...userCustomizations,
      customFlavor: parseInt(value),
    });
  };

  const handleChangeMessage = (value) => {
    setUserCustomizations({ ...userCustomizations, message: value });
  };
  // end handlers

  // function to get the current product details from DB
  const getProduct = () => {
    callApi(`/data/database.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    // Here we will monitor 'product' to call useEffect, as the value of product will change twice.
    // On first load its value is  null -> so we call getProduct() while displaying a loading screen.
    // After we get result from getProduct, we will check to see if this product is already in cart and reflect the values
    // previously stored in cart to the user.

    if (product) {
      const cart = productsInCart.find(
        (cartProd) => cartProd.id === product.id
      );
      if (cart) {
        setUserCustomizations({
          packageSize: cart.packageSize,
          customFlavor: cart.customFlavor,
          message: cart.message,
        });
        setProdInCart(true);
      } else if(product.productType === PRODUCT_CUSTOM) {
          //Init customFlavor only if the product is an occasion cake
          setUserCustomizations({...userCustomizations,customFlavor:FLAVOR_STRAWBERRY});
      }
    } else {
      getProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (!product?.itemName) return <Loader />;
  // if (1) return <Loader />

  return (
    <div className="mx-[10px] md:px-[50px] py-[20px] lg:py-[100px] flex flex-col items-start lg:items-start lg:justify-start lg:flex-row">
      <div className="flex flex-col-reverse  md:flex-row w-[360]">
        <div className="mt-[10px] md:mr-[10px] md:mt-0">
          <img
            src={product.imageSmall}
            alt="pic1"
            className="h-[50px] md:h-[auto]"
            loading="lazy"
          />
        </div>
        <ProductMagnify imgSrc={product.image} imgTitle={product.itemName}/>
      </div>
      <ProductInfo
        product={product}
        customization={userCustomizations}
        changePackageSize={handleSetPackageSize}
        changeCustomFlavor={handleCustomFlavor}
        onSubmitHandler={handleSubmit}
        changeMessage={handleChangeMessage}
        buttonText={prodInCart ? `Update Bag` : `Add to Bag`}
      />
    </div>
  );
};

export default ProductPage;
