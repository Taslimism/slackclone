import React from 'react';
import SlackLogo from './../../assets/slack.png';

import Button from '../Shared/Button';

const Navigation = () => {

    return <div className="w-11/12 flex mx-auto p-6 ">
        <div className="flex items-center flex-1">
            <div className="flex mx-4 items-center">
                <img className="w-8 h-8 mx-1" src={SlackLogo} alt="main-logo"></img>
                <span className='font-extrabold text-2xl'>slack</span>
            </div>
            <div title="This link leads nowhere" className='mx-4 cursor-pointer text-sm font-bold flex mx-1'>
                Product

            </div>
            <div title="This link leads nowhere" className='mx-4 cursor-pointer text-sm font-bold'>
                Solutions
            </div>
            <div title="This link leads nowhere" className='mx-4 cursor-pointer text-sm font-bold'>
                Enterprises
            </div>
            <div title="This link leads nowhere" className='mx-4 cursor-pointer text-sm font-bold'>
                Resources
            </div>
            <div title="This link leads nowhere" className='mx-4 cursor-pointer text-sm font-bold'>
                Pricing
            </div>

        </div>
        <div className='flex items-center text-sm font-bold'>
            <div className='mx-4 cursor-pointer' text-sm font-bold>
                Sign in
            </div>
            <div className='mx-4 text-sm font-bold '>
                <Button text="Try For Free" css="py-2 px-6 uppercase rounded text-white bg-primary" />
            </div>


        </div>
    </div>

}

export default Navigation;