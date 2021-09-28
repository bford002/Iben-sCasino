import React from 'react';
import axios from 'axios';

import { GoogleLogin } from 'react-google-login';


// const handleLogin = () => {
//   axios.get('/google/callback').then(() => {
//     console.log("login");
//   }).catch((err) => {
//     console.log('Error handleLogin:', err)
//   })
// }

const responseGoogle = (response) => {
  // CORS issue -> using entire url  --> need to use local host?
  axios.get('http://127.0.0.1:1337/google')
    .then(() => {
      console.log(response);
    })
    .catch((err) => {
      console.log('response error:', err);
    });
};


const Login = (props) => {
  //logic for google passport etc.
  const {changeRender} = props;
  return (
    <div>login goes here
      
      <GoogleLogin
        clientId='521603210674-c3r17jn27bg4s5qefj4nnit2ccb2sj03.apps.googleusercontent.com' 
        buttonText="Log in with Google"
        onSuccess={responseGoogle}
        //onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

    
     
      <button onClick={()=> changeRender('blackjack')}>test changeRender to blackjack</button>
    </div>
  );
};

export default Login;