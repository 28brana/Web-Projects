import React from 'react'
import { auth, provider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {useDataState} from "../DataState"
import { useHistory } from 'react-router';

import "./Login.css"
import AnimationBot from './AnimationBot';


function Login() {

    const[,setData]=useDataState();
    const history=useHistory();

    const login =()=>{
        
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setData({
                type:"LOGIN",
                user:user,
                login:true
            });

            history.push("/chat");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("Error : ",errorCode,errorMessage,credential);
        
        });
    
    }

    return (
        <div id="login">
           <div id="login-container">
             <AnimationBot/>
             <h1>Chat App</h1>
             <button onClick={login}>Login</button>  
             <h5>Login With your Gmail account</h5>
           </div>
        </div>
    )
}

export default Login
