import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { FaBagShopping, FaMagnifyingGlass, FaBars, FaX } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const { productsNumber } = useSelector((state) => state.cart);
  const searchRef = useRef();
  const menuRef = useRef();

  const showSearchBar = () => {
    console.log("heelo");
    searchRef.current.classList.toggle("hidden");
    searchRef.current.classList.toggle("flex");
  };

  const showMenu = () => {
    menuRef.current.classList.remove("hidden");
  };

  const closeMenu = () => {
    menuRef.current.classList.add("hidden");
  };

  return (
    <div className="relative">
      <div
        ref={menuRef}
        className="hidden fixed h-[100%] w-[100%] top-0 z-50 border bg-sugarplum-sp_red_pink text-white border-pink-400"
      >
        <FaX
          className="w-[30px] h-[auto] sm:w-[35px] absolute right-[30px] top-6 hover:text-black cursor-pointer"
          onClick={closeMenu}
        />
        <div className="flex flex-col justify-center items-center h-[70%] gap-6 text-2xl font-bold font-inter">
          <Link to={`/category/menu`} onClick={closeMenu}>
            <div className="pr-10 hover:text-black transition-all">Menu</div>
          </Link>
          <Link to={`/category/occasions`} onClick={closeMenu}>
            <div className="pr-10 hover:text-black transition-all">
              Occasions
            </div>
          </Link>
        </div>
      </div>

      <div
        className="hidden items-center justify-center py-[5px] bg-sugarplum-sp_red_pink"
        ref={searchRef}
      >
        <SearchBar />
      </div>

      <div className="relative bg-sugarplum-background h-[75px] shadow-nav_logo z-10 flex justify-between items-center px-[15px] py-[10px]">
        <Link to={`/`} className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/assets/Logo_playfair.png"
            alt="logo"
            className="w-[150px] sm:w-[180px] lg:w-56 h-auto"
          />
        </Link>
        <FaBars
          className="w-[25px] h-[auto] sm:w-[35px] text-sp_pink hover:text-black cursor-pointer"
          onClick={showMenu}
        />
        <div className="flex justify-around items-center text-sp_pink">
          <FaMagnifyingGlass
            className="w-[20px] h-[auto] sm:w-[30px] hover:text-black cursor-pointer"
            onClick={showSearchBar}
          />
          <Link to={`/bag`} className="relative pl-5">
            <FaBagShopping className="w-[25px] h-[auto] sm:w-[30px] hover:text-black transition-all" />
            <div className="bg-pink-300 font-semibold text-center rounded-[50%] text-xs h-[15px] w-[15px] absolute bottom-[-8px] right-[-2px]">
              {productsNumber}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
