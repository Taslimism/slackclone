import React, { useState } from "react";
import Button from "../Shared/Button";

import HeroImg from "./../../assets/img-campaign-hero.jpg";
import VideoThumbnail from "./../../assets/video-thumbnail.jpeg";

import Fox from "./../../assets/fox.png";
import LonelyPlanet from "./../../assets/lonelyplanet.png";
import Intuit from "./../../assets/intuit.png";
import Carvana from "./../../assets/carvana.png";
import Kiva from "./../../assets/kiva.png";
import Target from "./../../assets/target-logo.png";
import Devacurl from "./../../assets/devacurl.png";

import Google from "./../../assets/google.png";
import { Link } from "react-router-dom";

const Hero = () => {
	const [showLogin, setShowLogin] = useState(false);

	const handleClick = () => {
		setShowLogin(!showLogin);
	};

	return (
		<div>
			<div className="flex w-10/12 mt-7 mx-auto">
				<div className="flex flex-col flex-1 justify-around">
					<h1 className="text-6xl font-extrabold w-96">
						Slack is your digital HQ
					</h1>
					<p onClick={handleClick} className="w-4/5 text-lg">
						Transform the way that you work with one place for everyone and
						everything that you need to get things done.
					</p>
					{showLogin && (
						<div>
							<Link to="/register">
								<Button
									text="Try For Free"
									css="py-4 px-8 uppercase rounded text-white bg-primary mr-2"
								/>
							</Link>
							<Button
								text="Sign in with Google"
								img={Google}
								css="border-0 px-8 py-3 transition ease-in-out duration-700 border-skyblue hover:bg-dark font-extrabold rounded text-skyblue bg-transparent"
							/>
						</div>
					)}
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
					<img
						className="w-4/5 relative top-4"
						src={VideoThumbnail}
						alt="video"
					/>
				</div>
				<div className="flex flex-col flex-1 justify-around">
					<p className="text-3xl w-4/5 font-bold">
						Now is your moment to build a better tomorrow
					</p>
					<p className="w-4/5">
						We’ve seen what the future can be. Now it’s time to decide what it
						will be.
					</p>
					<Button
						text="Watch Video"
						css="py-4 border-2 border-primary px-8 w-44 rounded text-primary bg-transparent"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
