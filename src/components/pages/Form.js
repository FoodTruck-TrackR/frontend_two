import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "./SignUp";

//setting the initial values
const initialValues = {
  name: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: ""
};

//creating the validation schema
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(2, "Name must be at least 2 characters"),
  age: yup
    .number()
    .required("Please supply your age")
    .min(18, "You must be at least 18 years")
    .max(60, "You must be at most 60 years"),
  email: yup
    .string()
    .email()
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
});

function Form({ onSubmit }) {
  //using useFormik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  //use formik.getFieldProps for input fields
  const nameProps = formik.getFieldProps("name");
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
  const confirmPasswordProps = formik.getFieldProps("confirmPassword");

  /**
   * getFieldProps is a way to reduce boilerplate (repetitive) code.
   * It returns helper methods like `onChange`, `onBlur`, `value`, `name`.
   *
   * @see Formik https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
   */
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField
        label="Name"
        type="text"
        placeholder="Please Enter your name"
        {...nameProps}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
     
      <FormField
        label="Email"
        type="email"
        placeholder="Please Enter your email"
        {...emailProps}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <FormField
        label="Password"
        type="password"
        placeholder="Please Enter your password"
        {...passwordProps}
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
