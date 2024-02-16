"use client"
import * as yup from "yup";


// const password = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

export const basicSchema = yup.object().shape({
    fullName: yup.string().max(25, "Your full name must not be more than 25 characters or less").required("Required"),
    email: yup.string().email("please, enter a valid email").required("Required"),
    password: yup.string().min(8).matches(passwordRules, {message: "must contain one uppercase,lowercase letter,number and special character"}).required("Required"),
    // country: yup.string().min(3, "country name must be greater than 3 characters or more").required("Required"),
    // state: yup.string().min(2, "state name must be greater than 2 characters or more").required("Required")
 })