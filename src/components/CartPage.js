import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import Hr from "./Hr";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Empty from "./Empty";

const CartPage = () => {
  const { products, productsNumber } = useSelector((state) => state.cart);

  const subTotal = products.reduce((sum, product) => {
    return sum + product.basePrice * product.packageSize;
  }, 0);
  const discount = 60;

  if (!productsNumber)
    return (
      <Empty
        image={`/assets/emptyBag.svg`}
        message={`Feels so light here....`}
        altText={`Empty Bag`}
      />
    );

  return (
    <div className="flex flex-col mx-[20px] justify-center my-[30px] md:my-[50px] md:flex-row">
      <div className="bg-sugarplum-container p-[40px] md:mx-[30px] rounded-xl shadow-cat_card min-w-[50%] max-[767px]:mb-[20px]">
        <h2 className="font-bold text-sm">
          My Bag:{" "}
          <span className="font-medium text-sp_pink">
            ({productsNumber} {productsNumber === 1 ? `item` : `items`}):
          </span>
        </h2>
        <Hr customClass={`my-[5px] border-dotted`} />
        {products.map((product, index) => {
          return <CartItems key={index} product={product} />;
        })}
      </div>
      <div className="bg-sugarplum-container p-[30px] rounded-xl shadow-cat_card flex flex-col h-[400px] min-w-[300px]">
        <h2 className="font-black text-sp_pink sm:text-lg">Order Summary:</h2>
        <div className="text-xs sm:text-sm font-medium my-[40px]">
          <div className="flex justify-between">
            <div>Sub Total :</div>
            <div>&#x20B9;{subTotal}</div>
          </div>
          <div className="flex justify-between">
            <div className="">Discount :</div>
            <div>&#x20B9;{discount}</div>
          </div>
        </div>
        <Hr customClass={`w-[70%] self-center border-dashed`} />
        <div className="flex flex-col text-sm my-[20px]">
          <div className="flex justify-between font-bold mb-[15px] text-sm sm:text-sm">
            <div>Grand Total :</div>
            <div>&#x20B9;{subTotal - discount}</div>
          </div>
          <Button1
            text={`Place Order`}
            customClass={`text-sm sm:text-base py-[5px] mb-[5px] min-w-[200px] self-center`}
          />
          <Link to={`/category/menu`} className="self-center">
            <Button2
              text={`Continue Shopping`}
              customClass={`text-xs text-sp_pink hover:text-black transition-all`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
