import { useLayoutEffect } from "react";
import Carousel from "./Carousel";
import CustomForm from "./CustomForm";
import Hr from "./Hr";

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-sugarplum-background">
      <Carousel />
      <Hr />
      <div
        id="about"
        className="flex flex-col md:flex-row flex-grow items-center justify-center p-[50px]"
      >
        <img
          loading="lazy"
          src="/assets/small_version_about.jpg"
          alt="about"
          className="rounded-[50%] h-auto w-[100px] sm:w-[200px] flex-1 sm:px-[60px]"
        />
        <div className="flex-1 px-[20px]">
          <h2 className="text-sp_pink text-xl font-black sm:text-3xl md:text-4xl sm:font-black py-[20px]">
            ABOUT US
          </h2>
          <p className="text-xs leading-relaxed sm:text-xs md:text-base sm:leading-loose">
            Lorem ipsum dolor sit amet consectetur. Neque id eget porttitor
            fusce volutpat ipsum neque egestas porta. In integer nunc felis
            neque sed turpis blandit vitae. In imperdiet eget scelerisque cursus
            mattis quis sed facilisi id. Sed amet non urna at vitae et. Eget at
            nisi platea accumsan aliquam orci. Ut eu aliquam eget commodo nulla
            est faucibus justo in. Cras ultrices arcu sociis ipsum nam amet sed
            lectus consequat
          </p>
        </div>
      </div>
      <div id="custom_form" className="flex flex-col sm:flex-row">
        <CustomForm customClass="flex-1" />
        <div className="flex-1 max-h-[500px] overflow-hidden">
          <img
            src="/assets/customForm_small.jpg"
            loading="lazy"
            alt="bake"
            className="h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
