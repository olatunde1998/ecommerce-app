"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

const SignIn = () => {
  const router = useRouter();
  const onSubmit = async (values, actions) => {
    router("/");
  };
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("please, enter a valid email")
        .required("Required"),
      password: yup
        .string()
        .min(8)
        .matches(passwordRules, {
          message:
            "must contain atleast one uppercase letter, one lowercase letter, one number and 1 special character",
        })
        .required("Required"),
    }),
    onSubmit,
  });
  return (
    <div className="text-xs md:text-sm my-10 ">
      <div className="text-gray-600 mb-8  text-center">
        <h1 className="text-[20px]">Log in</h1>
      </div>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} action="/" method="">
          <div className="">
            <label
              htmlFor="email"
              className="flex justify-start items-center text-gray-500 "
            >
              Email
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              placeholder="mailtomail:mail@abc.com"
              name="email"
              autoComplete="off"
              className="focus:outline-none  focus:ring-1 focus:ring-red-400 mt-2 block border border-grey-500 rounded-lg pl-3 py-2 mb-5 w-56 text-xs md:py-3 lg:w-80 lg:py-4"
            />
            {touched.email && errors.email ? (
              <p className="text-xs pb-5">{errors.email}</p>
            ) : null}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="flex justify-start items-center text-gray-500 "
            >
              Password
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={open === false ? "password" : "text"}
              id="password"
              className="block border border-grey-500 rounded-lg focus:outline-none  focus:ring-1 focus:ring-red-400 pl-3 py-2 mb-5 w-56 text-xs md:py-3 lg:w-80 lg:py-4"
            />
            {touched.password && errors.password ? (
              <p className="text-red-500 text-[3px] pb-5">{errors.password}</p>
            ) : null}
              <div className="absolute text-2xl right-1 md:right-20 top-1/2 lg:left-72 ">
              {open === false ? (
                <AiFillEyeInvisible onClick={toggle} />
              ) : (
                <AiFillEye onClick={toggle} />
              )}
            </div>
          </div>
          
          <div className="mb-7 text-gray-500 flex justify-start items-center">
            <input
              type="checkbox"
              value=""
              id="checkbox"
              className="accent-red-700"
            />
            <label className="inline pl-2 ">
              Remember Me{" "}
              <Link
                href="#"
                className="ml-10 text-red-700 hidden md:inline-block"
              >
                Forget Password?
              </Link>
            </label>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="text-white bg-red-700 border rounded-lg w-[95%] h-10 mb-7 flex justify-center items-center"
          >
            LogIn
          </button>
          <p className="text-gray-500 text-center">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-xs text-red-700">
              Register
            </Link>
          </p>
        </form>
      </div>
      {/* </div> */}
      {/* <div className="hidden md:block md:max-w-[50%] background-image bg-center bg-no-repeat">
                 <img src={SignIn1} alt="logo" className="h-[100%]" />
            </div>          */}
    </div>
  );
};

export default SignIn;
