//get connection to backend
import Api from "@/services/Api";

export default {
  register(credentials) {
    //post request to localhost8081/register
    //passing credentials
    return Api().post("register", credentials);
  },
  login(credentials) {
    //post request to localhost8081/login
    //passing credentials
    return Api().post("login", credentials);
  }
};

//
// AuthenticationService.register({
//     email: 'something@something.pl',
//     password: '123456'
// })
