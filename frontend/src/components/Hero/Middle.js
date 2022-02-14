import React from 'react';
import WhatChannel from './../../assets/what-are-channels.jpg';
import CreateChannel from './../../assets/create-a-channel.jpg'
import PauseNotification from './../../assets/pause-notifications.jpg'
import AddExternal from './../../assets/add-externalel.jpg';
import BrainStrom from './../../assets/brainstorm.jpg';

import ThreadVideo from './../../assets/img-hp-section-01.mp4';
import YellowVideo from './../../assets/img-hp-section-02.mp4';
import ThumbBump from './../../assets/img-hp-section-03.mp4';


const Middle = () => {
    return <>
        <div className="flex w-10/12 mt-20 mx-auto">
            <div className="flex flex-col flex-1">
                <h1 className="text-3xl my-6 font-extrabold w-10/12">
                    Move faster by organising your work life
                </h1>
                <p className="text-lg my-2 w-10/12">The key to productivity in Slack is organised spaces called channels – a different one for everything that you’re working on. With all the people, messages and files related to a topic in one place, you can move much faster.</p>
                <p className="text-lg my-8 w-10/12 text-skyblue"> Learn more about channels</p>
                <div className="flex gap-10 ">
                    <img className="w-4/12 rounded" src={WhatChannel} />
                    <img className="w-4/12 rounded" src={CreateChannel} />
                </div>
            </div>
            <div className="flex  justify-end flex-1 text-right">
                <video className="h-10/12" src={ThreadVideo} />
            </div>
        </div>

        <div className="flex w-10/12 mt-20 mx-auto">
            <div className="flex  justify-start flex-1 text-right">
                <video className="h-10/12" src={YellowVideo} />
            </div>
            <div className="flex flex-col flex-end flex-1">
                <h1 className="text-3xl my-6 font-extrabold w-10/12">
                    Focus your time, on your own terms
                </h1>
                <p className="text-lg my-2 w-10/12">Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time, and find answers in conversations from across your company.</p>
                <p className="text-lg my-8 w-10/12 text-skyblue"> Learn more about channels</p>
                <div className="flex gap-10 ">
                    <img className="w-4/12 rounded" src={PauseNotification} />
                </div>
            </div>
        </div>

        <div className="flex w-10/12 mt-20 mx-auto">
            <div className="flex flex-col flex-1">
                <h1 className="text-3xl my-6 font-extrabold w-10/12">
                    Simplify teamwork for everyone
                </h1>
                <p className="text-lg my-2 w-10/12">
                    Give everyone that you work with – both inside and outside your company – a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels and simplify all your communication into one place.
                </p>
                <p className="text-lg my-8 w-10/12 text-skyblue"> Learn how to work with external partners in Slack</p>
                <div className="flex gap-10 ">
                    <img className="w-4/12 rounded" src={AddExternal} />
                    <img className="w-4/12 rounded" src={BrainStrom} />
                </div>
            </div>
            <div className="flex  justify-end flex-1 text-right">
                <video className="h-10/12" src={ThumbBump} />
            </div>
        </div>
    </>

}

export default Middle;