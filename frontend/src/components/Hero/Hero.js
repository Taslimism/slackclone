import React from "react";
import Button from "../Shared/Button";

import HeroImg from './../../assets/img-campaign-hero.jpg';
import VideoThumbnail from './../../assets/video-thumbnail.jpeg'

import Fox from './../../assets/fox.png';
import LonelyPlanet from './../../assets/lonelyplanet.png';
import Intuit from './../../assets/intuit.png';
import Carvana from './../../assets/carvana.png'
import Kiva from './../../assets/kiva.png';
import Target from './../../assets/target-logo.png';
import Devacurl from './../../assets/devacurl.png';




const Hero = () => {

    return <>
        <div className="flex w-10/12 mt-7 mx-auto">
            <div className="flex flex-col flex-1 justify-around">
                <h1 className="text-6xl font-extrabold w-96">Slack is your digital HQ</h1>
                <p className="w-4/5 text-lg">Transform the way that you work with one place for everyone and everything that you need to get things done.</p>
                <Button text="Try For Free" css="py-4 px-8 w-44 uppercase rounded text-white bg-primary" />
            </div>
            <div className="flex-1 ">
                <img src={HeroImg} alt="hero" />
            </div>
        </div>

        <div className="flex w-10/12 mt-20 mx-auto items-center justify-between">
            <img className="w-16" src={Fox} alt="company-logo" />
            <img className="w-32 h-16" src={LonelyPlanet} alt="company-logo" />
            <img className="w-28" src={Intuit} alt="company-logo" />
            <img className="w-32" src={Carvana} alt="company-logo" />
            <img className="w-16" src={Kiva} alt="company-logo" />
            <img className="h-8" src={Target} alt="company-logo" />
            <img className="w-28" src={Devacurl} alt="company-logo" />
        </div>

        <div className="flex w-10/12 mt-20 mx-auto ">
            <div className="flex-1">
                <img className="w-4/5 relative top-4" src={VideoThumbnail} alt="video" />
            </div>
            <div className="flex flex-col flex-1 justify-around">
                <p className="text-3xl w-4/5 font-bold">Now is your moment to build a better tomorrow</p>
                <p className="w-4/5">We’ve seen what the future can be. Now it’s time to decide what it will be.</p>
                <Button text="Watch Video" css="py-4 border-2 border-primary px-8 w-44 rounded text-primary bg-transparent" />
            </div>
        </div>


    </>

}

export default Hero;