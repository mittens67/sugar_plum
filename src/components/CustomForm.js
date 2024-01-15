import React from "react";
import Button1 from "./Button1";
import TextBox from "./TextBox";

const CustomForm = ({customClass}) => {
  return (
    <div className={`bg-sugarplum-sp_red_pink text-white p-[2%] ${customClass}`}>
      <h2 className="font-black text-2xl">Looking For Something Specially Custom Made?</h2>
      <p className="text-xl">Let Us Know Below!</p>
      <div className="flex flex-col mt-[20px]">
        <div className="flex my-[10px] w-[90%]">
          <input type="text" placeholder="Name" className="w-[50%] mr-[10px] px-[5px] placeholder-sp_pink"/>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="Phone Number"
            className="w-[50%] px-[5px] placeholder-sp_pink"
          />
        </div>
        <input type="email" placeholder="Email" className="my-[10px] w-[90%] px-[5px] placeholder-sp_pink"/>
        <TextBox placeholder={"What is on your mind?"} rows="4" cols="50" maxLength={100}/>
        <Button1 text={`Submit`} customClass={'w-[200px] py-[5px]'}/>
      </div>
    </div>
  );
};

export default CustomForm;
