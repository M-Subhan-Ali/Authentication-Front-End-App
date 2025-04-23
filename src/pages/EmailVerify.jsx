import React, { useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { appContext } from "../context/appContext";
import { toast } from "react-toastify";

const EmailVerify = () => {
  const navigate = useNavigate();

  const { Backend_URL, isLoggedIn, UserData, getUserData } =
    useContext(appContext);

  axios.defaults.withCredentials = true;

  const SubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true ;

      const otpArray = inputRefs.current.map((subhan) => subhan.value);

      const otp = otpArray.join("");

      const { data } = await axios.post(
        `${Backend_URL}/api/auth/verifyAccount`,
        { otp }
      );

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const inputRefs = useRef([]);

  const HandleOnInput = (e, index) => {
    //hehe for moving to the next input by typing otp hehehe

    const nextInput = inputRefs.current[index + 1];
    if (e.target.value.length > 0 && nextInput) {
      nextInput.focus();
    }
  };

  const HandleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const HandlePaste = (e) => {
    const paste = e.clipboardData.getData("text");

    const pasteArray = paste.split("");

    pasteArray.forEach((character, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = character;
      }
    });
  };
 

  useEffect(()=>{
    
    isLoggedIn && UserData.isAccountVerify && navigate("/")

  },[ isLoggedIn, UserData ])



  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400 ">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32
            cursor-pointer"
      />
      <form
        onSubmit={SubmitHandler}
        className="bg-slate-900 p-8 rounded-lg shadow-lg w-72 md:w-96 text-sm"
      >
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Email Verify OTP
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter the 6-digit code send to your email id.
        </p>
        <div
          className="flex justify-center mb-8 gap-1.5 md:gap-2"
          onPaste={HandlePaste}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => {
              return (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  required
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => HandleOnInput(e, index)} //for upgrading to next input broo
                  onKeyDown={(e) => HandleKeyDown(e, index)} //for going backl to previous input bro
                  className="
          w-10 md:w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
                />
              );
            })}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900
      text-white rounded-full cursor-pointer"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default EmailVerify;
