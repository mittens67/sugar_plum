import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button1 from "./Button1";
import TextBox from "./TextBox";

import "react-toastify/dist/ReactToastify.css";

const CustomForm = ({ customClass }) => {
  const [form, setForm] = useState({
    custName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onMessageChange = (value) => {
    setForm({ ...form, message: value });
  };

  const notifyError = (message) => {
    toast.error(message);
  }

  const printErrors = (errors) => {
    if(errors.custName) notifyError(errors.custName);
    if(errors.phone) notifyError(errors.phone);
    if(errors.email) notifyError(errors.email);
    if(errors.message) notifyError(errors.message);
  };

  const handleSubmit = () => {
    //validate the form first
    const validationErrors = {};

    if (!form.custName.trim()) {
      validationErrors.custName = "Please enter your name!";
    }

    if (!form.email.trim()) {
      validationErrors.email = "Please enter Email!";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(form.email)
    ) {
      validationErrors.email = "Please enter a valid email!";
    }

    if (!form.phone.trim()) {
      validationErrors.phone = "Please enter phone number!";
    } else if (!/^[0]?[6789]\d{9}$/.test(form.phone)) {
      validationErrors.phone = "Please enter valid phone number!";
    }

    if (!form.message.trim()) {
      validationErrors.message = "Please add a message!";
    }

    // If form values have no issues, process further and notify success, else notify error
    if (Object.keys(validationErrors).length === 0) {
      toast.success("Query submitted successfully!");
      //figure out later if you want to expand on storage of this, for now just clear form
      setForm({
        custName: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      printErrors(validationErrors);
    }
  };

  return (
    <div className={`bg-secondary-600 text-primary-700 p-[2%] ${customClass}`}>
      <h2 className="font-black text-primary-50 text-lg sm:text-xl md:text-2xl">
        Looking For Something Specially Custom Made?
      </h2>
      <p className="text-base text-primary-50 sm:text-lg md:text-xl">
        Let Us Know Below!
      </p>
      <div className="flex flex-col mt-[20px]">
        <div className="flex my-[10px] w-[90%]">
          <input
            name="custName"
            type="text"
            placeholder="Name"
            className="w-[50%] mr-[10px] px-[5px] placeholder-secondary-200"
            value={form.custName}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            placeholder="Phone Number"
            className="w-[50%] px-[5px] placeholder-secondary-200"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="my-[10px] w-[90%] px-[5px] placeholder-secondary-200"
          value={form.email}
          onChange={handleChange}
        />
        <TextBox
          placeholder={"What is on your mind?"}
          rows="4"
          cols="50"
          maxLength={100}
          message={form.message}
          changeMessage={onMessageChange}
        />
        <Button1
          text={`Submit`}
          onSubmit={handleSubmit}
          customClass={"w-[150px] text-xs sm:text-base sm:w-[200px] py-[5px]"}
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default CustomForm;
