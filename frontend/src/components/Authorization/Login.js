import React from 'react';

import Button from "../Shared/Button";

import SlackLogo from './../../assets/slack.png';


const Login = () => {


    return <>
        <div className="flex flex-col justify-center align-center text-center mx-auto p-8">
            <div className="flex mx-2 justify-center items-center">
                <img className="w-8 h-8 mx-4" src={SlackLogo} alt="main-logo"></img>
                <span className='font-extrabold text-4xl'>slack</span>
            </div>
            <div className='mt-8'>
                <p className='text-5xl tracking-tight font-extrabold'>First, enter your email</p>
            </div>
            <div className='mt-8'>
                <p className='text-lg text-slate tracking-tight'>
                    We suggest using the
                    <span className='font-bold ml-1'>
                        email address you use at work.
                    </span>
                </p>
            </div>
            <div className="flex mt-8 flex-col  mx-auto">
                <input type="email" placeholder="name@workemail.com" className="border-2 mb-4 px-36 py-2 border-grey-100 py-2 font-extrabold rounded text-dark bg-white" />
                <Button text="Continue" css="border-2 px-36 border-dark py-2 font-extrabold rounded text-white bg-primary" />
            </div>
            <div className='mt-8'>
                <input type="checkbox" />
                <span className='ml-2'>It's okay to send me email about slack</span>
                <p className='w-4/12 text-slate mx-auto mt-5'>By continuing, you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.</p>
            </div>
        </div>
    </>
}

export default Login;