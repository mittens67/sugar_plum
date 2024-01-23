import { useLayoutEffect } from "react";
import Carousel from "./Carousel";
import CustomForm from "./CustomForm";
import Hr from "./Hr";

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-background-50">
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
          <h2 className="text-secondary-500 text-xl font-black sm:text-3xl md:text-4xl sm:font-black py-[20px]">
            ABOUT US
          </h2>
          <p className="text-xs leading-relaxed sm:text-xs md:text-base sm:leading-loose">
            Sugar Plum is an FSSAI-certified bakery - where every dessert is
            hand-crafted with expertise and love! We are a small group of bakers
            with a shared passion for crafting the finest baked treats.Our love
            for our craft has taken us on exciting journies into the world of
            baking. We have worked with some of the most celebrated masters in
            the field. And now we are excited to have yet another magical
            journey together!<br /> We aim to spread the magical happiness of
            sweet delights using the highest quality ingredients and perfection
            honed by years of practice to bake the most delectable cakes,
            pastries, cupcakes, and more! Sugar Plum is our love letter to a
            lifelong passion and a heaven for dessert lovers of all ages!
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
