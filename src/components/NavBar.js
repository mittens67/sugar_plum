import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const { productsNumber } = useSelector((state) => state.cart);
  return (
    <div className="relative bg-sugarplum-background h-15 shadow-nav_logo z-10 flex justify-around items-center py-[10px]">
      <Link to={`/`} className="absolute left-[1%] px-[10px]">
        <img src="/assets/Logo3.png" alt="logo" className="w-56 h-auto" />
      </Link>
      <div className="flex text-footer_pink font-bold font-inter px-[20%]">
        <Link to={`/category/menu`}>
          <div className="pr-10 hover:text-black transition-all">Menu</div>
        </Link>
        <Link to={`/category/occasions`}>
          <div className="pr-10 hover:text-black transition-all">Occasions</div>
        </Link>
      </div>
      <SearchBar />
      <Link to={`/bag`} className="relative">
        <i className="fa-solid fa-bag-shopping fa-2xl text-footer_pink hover:text-black transition-all"></i>
        <div className="bg-pink-300 font-semibold text-sp_pink text-center rounded-[50%] text-xs h-[15px] w-[15px] absolute bottom-[-8px] right-[-2px]">
          {productsNumber}
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
