
import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("enter a valid email"),
    email: yup
      .string()
      .email("Email Is Required to register")
      .required("Email is required"),
     _terms: yup.boolean(true).oneOf([true], "try another email"),
    get terms() {
      return this._terms;
    },
    set terms(value) {
      this._terms = value;
    },
  });