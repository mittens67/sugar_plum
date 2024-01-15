import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sugarplum-footer_bg flex flex-col justify-center h-80 mt-auto">
      <div className="flex justify-around">
        <Link to={`/`} className="flex-1 w-80">
          <img src="/assets/Logo5.png" alt="logo" />
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <i className="fa-brands fa-facebook fa-2xl text-footer_pink m-5"></i>
          <i className="fa-brands fa-square-instagram fa-2xl text-footer_pink m-5"></i>
          <i className="fa-brands fa-square-twitter fa-2xl text-footer_pink m-5"></i>
        </div>
      </div>
      <p className="text-footer_color text-center font-poppins">
        Sugar Plum<sup className="text-xs">TM</sup> &#169;Copywrite 2024. All
        Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
