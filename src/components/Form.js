import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "./FormField";

//setting the initial values
const initialValues = {
  userName: "",
  password: "",
  email: "",
  role: "",

  
};

//creating the validation schema
const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .required("A username is required")
    .min(2, "Name must be at least 4 characters"),
  password: yup
    .string()
    .required("Please supply your password"),
    
    email: yup
    .string()
    .email()
    .required("Email is a required field"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
      }),
  role: yup
  .string()
    .required("Diner or Vendor")
  }
)
    
function Form({ onSubmit }) {
  //using useFormik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });
  
  //use formik.getFieldProps for input fields
  const userNameProps = formik.getFieldProps("userName");
  // const passwordProps = formik.getFieldProps("password");
  const emailProps = formik.getFieldProps("email");
  // const roleProps = formik.getFieldProps("role");
  const confirmPasswordProps = formik.getFieldProps("confirmPassword");

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField
        label="UserName"
        type="text"
        placeholder="Please choose your user name"
        {...userNameProps}
      />
      {formik.touched.userName && formik.errors.userName ? 
        <div>{formik.errors.userName}</div>
       : null}
      <FormField
        label="Email"
        type="email"
        {...emailProps}
        placeholder="Please Enter your email"
      />
      {formik.touched.email && formik.errors.email ? 
        <div>{formik.errors.email}</div>
      : null}
      <FormField
        label="Password"
        type= "text"
        placeholder="Please enter a password"
     
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <FormField
        label="Role"
        type="text"
        placeholder="Diner or Truck Owner"
      
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <FormField
        label="Confirm Password"
        type="password"
        placeholder="Please Confirm your password"
        {...confirmPasswordProps}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}
      <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
    </form>
  );
}
   
export default Form;
