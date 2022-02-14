import React from "react";

import Navigation from "./../components/Navigation/Navigation";
import Hero from './../components/Hero/Hero';
import Middle from './../components/Hero/Middle';

const Home = () => {
    return <>
         <div className="bg-body">
            <Navigation/>
            <Hero/>
        </div>
        <div className="bg-white">
            <Middle/>
        </div>
    </>
    
}

export default Home;