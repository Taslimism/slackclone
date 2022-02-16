import React from "react";
import SlackLogo from './../../assets/slack.png';

import github from './../../assets/github-brands.svg';
import linkedin from './../../assets/linkedin-brands.svg';





const FooterInfo = () => {

    return <>
        <div className="mt-7 w-10/12 mx-auto flex py-20 justify-between" >
            <div>
                <img className="w-8 h-8 mx-1" src={SlackLogo} alt="main-logo" />
            </div>
            <div>
                <p className="text-sm mb-4 font-bold">WHY SLACK?</p>
                <p className="text-xs mb-4">Slack vs email</p>
                <p className="text-xs mb-4">Channels</p>
                <p className="text-xs mb-4">Engagement</p>
                <p className="text-xs mb-4">Scale</p>
                <p className="text-xs mb-4">Watch the demo</p>
            </div>
            <div>
                <p className="text-sm mb-4 font-bold">PRODUCT</p>
                <p className="text-xs mb-4">Features</p>
                <p className="text-xs mb-4">Integrations</p>
                <p className="text-xs mb-4">Enterprise</p>
                <p className="text-xs mb-4">Solutions</p>

            </div>
            <div >
                <p className="text-sm mb-4 font-bold">PRICING</p>
                <p className="text-xs mb-4">Subscriptions</p>
                <p className="text-xs mb-4">Paid vs free</p>
            </div>
            <div>
                <p className="text-sm mb-4 font-bold">RESOURCES</p>
                <p className="text-xs mb-4">Partners</p>
                <p className="text-xs mb-4">Developers</p>
                <p className="text-xs mb-4">Community</p>
                <p className="text-xs mb-4">Apps</p>
                <p className="text-xs mb-4">Blog</p>
                <p className="text-xs mb-4">Help Centre</p>
                <p className="text-xs mb-4">Events</p>

            </div>
            <div>
                <p className="text-sm mb-4 font-bold">COMPANY</p>
                <p className="text-xs mb-4">About us</p>
                <p className="text-xs mb-4">Leadership</p>
                <p className="text-xs mb-4">Investor relations</p>
                <p className="text-xs mb-4">News</p>
                <p className="text-xs mb-4">Media kit</p>
                <p className="text-xs mb-4">Careers</p>
            </div>
            <hr />

        </div>
        <div className="mt-7 w-10/12 mx-auto flex justify-between">
            <div className="flex text-xs text-grey-300 justify-between gap-4">
                <p>Status</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Cookie preferences</p>
                <p>Contact us</p>
            </div>
            <div className="flex h-4 justify-between gap-4">
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
        <div className="w-10/12 mx-auto py-4 text-xs font-bold" >
            © {new Date().getFullYear()} This is just a clone of slack. I am building this to improve my skills.
        </div>
    </>

}

export default FooterInfo;