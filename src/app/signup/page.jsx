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
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      fullName: yup
        .string()
        .max(25, "Your full name must not be more than 25 characters or less")
        .required("Required"),
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
        <h1 className="text-[20px]">Sign Up</h1>
      </div>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} action="/" method="">
          <div>
            <label
              htmlFor="fullName"
              className="flex justify-start items-center text-gray-500"
            >
              Full Name
            </label>
            <input
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="fullName"
              placeholder="Full Name"
              name="fullName"
              autoComplete="off"
              className="focus:outline-none  focus:ring-1 focus:ring-grey-100 mt-2 block border border-grey-500 rounded-lg  pl-3 py-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4"
            />
            {touched.fullName && errors.fullName ? (
              <p className="text-red-500 text-xs pb-5 text-[8px]">{errors.fullName}</p>
            ) : null}
          </div>
          <div className="my-4">
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
              className="focus:outline-none focus:ring-1 focus:ring-red-400 mt-2 block border border-grey-500 rounded-lg pl-3 py-2 w-56 text-xs md:py-3 lg:w-80 lg:py-4"
            />
            {touched.email && errors.email ? (
              <p className="text-xs text-red-500 pb-5 text-[8px]">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="flex justify-start items-center text-gray-500 "
            >
              Password
            </label>
            <div className="relative">
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={open === false ? "password" : "text"}
                id="password"
                className="block absolute border border-grey-500 rounded-lg focus:outline-none  focus:ring-1 focus:ring-red-400 pl-3 py-2 mb-5 w-56 text-xs md:py-3 lg:w-80 lg:py-4"
              />
              <div className="ml-48 absolute top-3 text-xl md:ml-[190px] lg:ml-[280px] xl:ml-[290px] ">
                {open === false ? (
                  <AiFillEyeInvisible onClick={toggle} className="cursor-pointer" />
                ) : (
                  <AiFillEye onClick={toggle} className="cursor-pointer"/>
                )}
              </div>
            </div>
            {touched.password && errors.password ? (
              <p className="text-red-500 text-[5px] md:text-[6px] lg:text-[8px] pb-5 mt-12">
                {errors.password}
              </p>
            ) : null}
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
                className="ml-10 text-red-700 hidden md:inline-block cursor-pointer"
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
            SignUp
          </button>
          <p className="text-gray-500 text-center">
            Already have an account?{" "}
            <Link href="#" className="text-sm text-red-700 cursor-pointer">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
