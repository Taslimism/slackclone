import React from "react";
import Button from "../Shared/Button";



const FooterBottom = () => {

    return <>

        <div className="flex flex-col py-20 text-center justify-between">
            <h1 className="text-2xl text-white my-8 font-extrabold ">
                Welcome to where future works
            </h1>
            <div className="flex gap-4 items-center justify-center ">
                <Button text="Try For Free" css="py-4 px-6 border-2 uppercase rounded text-primary bg-white" />
                <Button text="Talk to Sales" css="py-4 border-2 px-6 uppercase rounded text-white bg-primary" />
            </div>
        </div>


    </>

}

export default FooterBottom;