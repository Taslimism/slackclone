import React from "react";
import SlackLogo from './../../assets/slack.png';


const FooterInfo = () => {

    return <>
        <div className="flex py-20 text-center justify-between" >
            <div>
                <img className="w-8 h-8 mx-1" src={SlackLogo} alt="main-logo" />
            </div>
            <div>
                <p>WHY SLACK?</p>
                <p>Slack vs email</p>
                <p>Channels</p>
                <p>Engagement</p>
                <p>Scale</p>
                <p>Watch the demo</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>

}

export default FooterInfo;