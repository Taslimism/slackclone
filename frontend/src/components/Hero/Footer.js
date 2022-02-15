import React from 'react';
import ImagePromo1 from './../../assets/img-promo-what-is-slack.jpeg';
import ImagePromo2 from './../../assets/img-promo-02.jpeg';
import ImagePromo3 from './../../assets/img-promo-03.jpeg';
import ImagePromo4 from './../../assets/img-promo-04.jpeg';

const Footer = () => {
    return <div className="mt-20 mx-auto pb-20">
        <h1 className="text-center  pt-20 font-extrabold text-4xl">Get started with Slack</h1>
        <div className='flex w-10/12 mt-20 mx-auto justify-between'>
            <div>
                <div className='bg-primary mb-4 text-white text-lg rounded  w-8 p-1 font-extrabold text-center'>1</div>
                <div className='font-extrabold mb-4'>
                    Sign up
                </div>
                <div className='w-4/5'>
                    Create a new Slack workspace
                    in just a few moments. It’s free to try for teams of any size.
                </div>
            </div>
            <div>
                <div className='bg-primary mb-4 text-white text-lg rounded  w-8 p-1 font-extrabold text-center'>2</div>
                <div className='font-extrabold mb-4'>
                    Invite your colleagues
                </div>
                <div className='w-4/5'>
                    Slack is better together (no, really,
                    it’s a bit underwhelming by yourself), and it’s easy to invite your team.
                </div>
            </div>
            <div>
                <div className='bg-primary mb-4 text-white text-lg rounded  w-8 p-1 font-extrabold text-center'>3</div>
                <div className='font-extrabold mb-4'>
                    Give it a go
                </div>
                <div className='w-4/5'>
                    Run a project, coordinate with your team or just talk things through.
                    Slack is a blank canvas for teamwork.
                </div>
            </div>
        </div>

        <div className='flex relative w-10/12 mt-20 mx-auto gap-8 justify-between'>
            <div className='p-4 bg-white h-96'>
                <img src={ImagePromo1} alt="idk" />
                <p className='text-xs my-4'>Webinar</p>
                <p className='text-2xl  font-extrabold'>What is Slack?</p>
                <p className='absolute bottom-4 '>Watch now</p>
            </div>
            <div className='p-4 bg-white'>
                <img src={ImagePromo2} alt="idk" />
                <p className='text-xs my-4'>Customer stories</p>
                <p className='text-2xl font-extrabold'>Get inspired by real Slack customers</p>
                <p className='absolute bottom-4 '>Read Stories</p>
            </div>
            <div className='p-4 bg-white'>
                <img src={ImagePromo3} alt="idk" />
                <p className='text-xs my-4'>Solutions</p>
                <p className='text-2xl font-extrabold'>Learn how Slack can work for your team</p>
                <p className='absolute bottom-4 '>Explore Solutions</p>
            </div>
            <div className='p-4 bg-white'>
                <img src={ImagePromo4} alt="idk" />
                <p className='text-xs my-4'>How-to</p>
                <p className='text-2xl mb-8 font-extrabold'>Start off on the right foot with Slack 101</p>
                <p className='absolute bottom-4 justify-between'>Learn How </p>
            </div>

        </div>
    </div>

}

export default Footer;