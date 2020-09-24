import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import * as yup from 'yup';
import Loader from "react-loader-spinner";
import styled from "styled-components";

const FormGroup = styled.div`
	width: 100%;
	max-width: 350px;
	padding: 15px;
	margin: 10% auto;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  `;

  const Button = styled.button`
  width: 100%;
  cursor: pointer;
	border: none;
	padding: 15px;
	font-size: 14px;
	border-radius: 3px;
	background-color: #0077CC;
	color: white;
  appearance: none;
  margin-top: 10%;
  &:hover {
    background-color: #006dcc;
  }
  `;

  const Input = styled.input`
	box-sizing: border-box;
	font-size: 14px;
	padding: 15px;
	border-radius: 3px;
	border: none;
	box-shadow: inset 0 0 0 1px #dee1e3;
	width: 100%;
	outline: none;
  transition: all 200ms;
  margin-top: 10%;
`;

const Select = styled.select`
height: 30px;
font-size: 14px;
width: 100%;
color: black;
background-color: white;
margin-top: 10%;
`;

// const formSchema = yup.object().shape({
//   name: yup.string().required("Name is a required field."),
//   email: yup
//       .string()
//       .email("Must be a valid e-mail address.")
//       .required("Must include an e-mail address."),
//   password: yup
//   .string()
//   .required("Must include a password."),
//  role: yup
//  .string()
//  .required("Must select either")
// });

const Register = () => {

  const [ credentials, setCredentials ] = useState({
    username: "",
    email: "",
    password: "", 
    role: "diner"
  });

  // const [buttonDisabled, setButtonDisabled] = useState(true);
  //   useEffect(()=> {
  //       formSchema.isValid(credentials).then(valid=>{
  //           setButtonDisabled(!valid);
  //       });
  //   }, [credentials]);

  const [ isLoading, setIsLoading ] = useState(false);

  const loading = () => {
    setIsLoading(true);
  }

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", credentials)
      .then(res => {
          console.log(res);
          setIsLoading(false);
      })
      .catch(err => {
        console.log("invalid login: ", err);
      });
  };


  return (
    <FormGroup>
      {/* {isLoading && (
          <div>
            <Loader type="Puff" color="#204963" height={60} width={60} />
            <p>Registering you now...</p>
          </div>
        )} */}
      <h1>Sign up as a diner or vendor</h1>  
      <h2>Sign Up</h2>
      <form onSubmit={register} >
        <Input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="username"
          onChange={handleChange}
        />
            <Input
                type="email"
                name="email"
                id="email"
                value={credentials.email}
                placeholder="email"
                onChange={handleChange}
                />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Select name="role" value={credentials.role} onChange={handleChange}>
            <option defaultValue="Diner">diner</option>
            <option value="Vendor">vendor</option>
        </Select>
        <Button type="submit" >Sign Up</Button>
        {/* disabled={buttonDisabled} */}
      </form>
    </FormGroup>
  )
};

export default Register;