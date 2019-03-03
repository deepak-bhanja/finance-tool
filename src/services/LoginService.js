//import axios from "axios";

export const LoginService = {
  login,
  logout
};

function login(username, password) {
  return new Promise((resolve, reject) => {
    const endpoint = `/api/Login`;
    if(username=="test" && password==1234){
      resolve('Successfully logged in successfull.');
    }else{
      reject('Invalid username or password.');
    }

    // axios.post(endpoint, {
    //   username,
    //   password
    // }).then(res => {
    //   resolve('Successfully logged in successfull.');
    // }).catch(error => {
    //   reject('Invalid username or password.');
    // });

  })
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};