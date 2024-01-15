import {useLayoutEffect} from "react";
import Carousel from "./Carousel";
import CustomForm from "./CustomForm";
import Hr from "./Hr";

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="bg-sugarplum-background">
      <Carousel />
      <Hr />
      <div id="about" className="flex flex-grow items-center justify-center p-[50px]">
        {/* <div className="border-2 rounded-[50%]"> */}
          <img loading="lazy" src="/assets/small_version_about.jpg" alt="about" className="rounded-[50%] h-auto w-[15%] flex-1 px-[60px]"/>
        
        <div className="flex-1 px-[20px]">
          <h2 className="text-sp_pink text-4xl font-black py-[20px]">ABOUT US</h2>
          <p className="leading-loose">
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
      <div id="custom_form" className="flex">
        <CustomForm  customClass="flex-1"/>
        <div className="flex-1 max-h-[500px] overflow-hidden">
          <img src="/assets/customForm_small.jpg" loading="lazy" alt="bake" className="h-auto object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
