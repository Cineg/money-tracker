import axios from "axios";

export default () => {
  //create axios object, and point to backend url
  return axios.create({
    baseURL: `http://localhost:8081/`
  });
};
