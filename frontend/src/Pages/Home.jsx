import React from "react";

import Navigation from "./../components/Navigation/Navigation";
import Hero from './../components/Hero/Hero';
import Middle from './../components/Hero/Middle';
import Footer from './../components/Hero/Footer';
import FooterBottom from './../components/Hero/FooterBottom';
import FooterInfo from './../components/Hero/FooterInfo';

const Home = () => {
    return <>
         <div className="bg-body">
            <Navigation/>
            <Hero/>
        </div>
        <div className="bg-white">
            <Middle/>
        </div>
        <div className="bg-body">
            <Footer/>
        </div>
        <div className="bg-primary rounded-b-[128px]">
        <FooterBottom/>
        </div>
        <div>
            <FooterInfo/>
        </div>
    </>
    
}

export default Home;