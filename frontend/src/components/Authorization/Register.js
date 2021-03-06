import React from 'react';
import Button from "../Shared/Button";

import axios from 'axios';

import SlackLogo from './../../assets/slack.png';
import Google from './../../assets/google.png';





const Register = () => {
    const loginHandler = async () => {


        const body = { "postBody": "id_token=[576956268726-rglsf6082o9il8kjce3s6u8fstk1lfjq.apps.googleusercontent.com]providerId=[google.com]", "requestUri": "[http://localhost]", "returnIdpCredential": true, "returnSecureToken": true };
        const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, body);
        console.log(data);
    }

    return <>
        <div className="flex relative  flex-col justify-center text-center mx-auto p-8">
            <div className="flex mx-2 justify-center items-center">
                <img className="w-8 h-8 mx-4" src={SlackLogo} alt="main-logo"></img>
                <span className='font-extrabold text-4xl'>slack</span>
            </div>
            <div className='mt-8'>
                <p className='text-5xl tracking-tight font-extrabold'>Sign in to Slack</p>
            </div>
            <div className='mt-8'>
                <p className='text-lg text-slate tracking-tight'>
                    We suggest using the
                    <span className='font-bold ml-1'>
                        email address you use at work.
                    </span>
                </p>
            </div>
            <div className="flex mt-4 flex-col  mx-auto">
                <Button onClick={loginHandler} text="Sign in with Google" img={Google} css="border-2 mb-4 px-36 py-2 border-skyblue font-extrabold rounded text-skyblue bg-transparent" />

            </div>
            <div className="flex mt-8 flex-row justify-center align-center" >
                <div className="flex items-center mr-4">
                    <hr className="border-solid w-[250px]" />
                </div>
                <div >Or</div>
                <div className="flex items-center ml-4">
                    <hr className="border-solid w-[250px]" />
                </div>
            </div>
            <div className="flex mt-4 flex-col  mx-auto">
                <input type="email" placeholder="name@workemail.com" className="border-2 mb-4 px-36 py-2 border-grey-100 py-2 font-extrabold rounded text-dark bg-white" />
                <Button text="Sign in with email" css="border-2 px-36 border-dark py-2 font-extrabold rounded text-white bg-primary" />
            </div>

        </div>
    </>

}

export default Register;