import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token
    },
    basrURL: "https://bw-foodtruck-backend.herokuapp.com"
    // baseURL: "https://lftt3.herokuapp.com" 
  });
};