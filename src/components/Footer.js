import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-900 flex flex-col justify-around h-72 sm:h-80 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <Link to={`/`} className="flex-1">
          <img src="/assets/Logo5.png" alt="logo" className="w-[500px] h-[auto]"/>
        </Link>
        <div className="flex flex-1 items-center justify-center text-secondary-500">
          <i className="fa-brands fa-facebook fa-2xl m-5"></i>
          <i className="fa-brands fa-square-instagram fa-2xl m-5"></i>
          <i className="fa-brands fa-square-twitter fa-2xl m-5"></i>
        </div>
      </div>
      <p className="text-secondary-100 text-center font-poppins text-[12px] sm:text-[14px]">
        Sugar Plum<sup className="text-[8px] sm:text-[12px]">TM</sup> &#169;Copywrite 2024. All
        Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
