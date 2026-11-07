import React from 'react'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="relative flex flex-col justify-between md:flex-row" id='home'>
            <div className="absolute -left-20 top-0 -z-10 h-[30rem] w-[22rem] rounded-full bg-orange/70 blur-[150px]"></div>
            <div className="flex flex-[3] flex-col gap-8 p-8 pt-6">
                <Header />
                {/*Ad*/}
                <div className="relative mt-16 flex w-fit items-center justify-start rounded-full bg-[#363d42] px-4 py-5 uppercase text-white max-md:mt-0 max-md:scale-90 max-md:self-center">
                    <motion.div
                        className="absolute left-2 z-[1] h-4/5 w-[5.4rem] rounded-full bg-orange"
                        initial={{ left: mobile ? "178px" : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition }}
                    >
                    </motion.div>
                    <span className="relative z-[2]">The best fitness club in town!</span>
                </div>
                {/*Hero Heading*/}
                <div className="flex flex-col gap-6 text-7xl font-bold uppercase text-white max-md:items-center max-md:justify-center max-md:text-3xl">
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div className="w-4/5 text-base font-light normal-case tracking-wider max-md:text-center max-md:text-sm">
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            Get your ideal body shape and live your life to the fullest
                        </span>
                    </div>
                </div>

                {/*Fig*/}
                <div className="flex gap-8 max-md:justify-center">
                    <div className="flex flex-col">
                        <span>
                            <span className="text-3xl text-white max-md:text-lg"><NumberCounter end={120} start={100} delay='4' preFix="+" /></span>
                        </span>
                        <span className="uppercase text-muted max-md:text-xs">Expert Trainers</span>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <span className="text-3xl text-white max-md:text-lg"><NumberCounter end={500} start={420} delay='4' preFix="+" /></span>
                        </span>
                        <span className="uppercase text-muted max-md:text-xs">Members Joined</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl text-white max-md:text-lg">
                        <NumberCounter end={70} start={20} delay='1' preFix="+" />
                        </span>
                        <span className="uppercase text-muted max-md:text-xs">Fitness Programs</span>
                    </div>
                </div>

                {/*Btns*/}
                <div className="flex gap-8 font-normal max-md:justify-center">
                    <button className="flex w-32 items-center justify-center border-4 border-transparent bg-orange p-2 font-bold text-white transition-all hover:cursor-pointer">Get Started</button>
                    <button className="flex w-32 items-center justify-center border-2 border-orange bg-transparent p-2 font-bold text-white transition-all hover:cursor-pointer">Learn More</button>
                </div>
            </div>
            <div className="relative min-h-[34rem] flex-1 bg-orange max-md:bg-transparent">
                <button className="absolute right-12 top-8 flex items-center justify-center border-4 border-transparent bg-white p-2 font-bold text-black transition-all hover:cursor-pointer">Join Now</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="absolute right-16 top-28 flex w-fit flex-col items-start gap-4 rounded bg-dark-grey p-4 max-md:left-4 max-md:right-auto max-md:top-8">
                    <img src={Heart} alt="" />
                    <span className="text-muted">Heart Rate</span>
                    <span className="text-2xl text-white"> 120 BPM</span>
                </motion.div>

                {/*Hero Images*/}
                <img src={hero_image} alt="" className="absolute right-32 top-40 z-10 w-[23rem] max-md:left-28 max-md:right-auto max-md:top-16 max-md:w-60" />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}

                    src={hero_image_back} alt="" className="absolute right-80 top-16 -z-10 w-60 max-md:left-8 max-md:right-auto max-md:top-0" />

                {/*Calories*/}
                <motion.div className="absolute right-[28rem] top-[32rem] flex w-fit gap-8 rounded bg-calorie-card p-4 max-md:left-6 max-md:right-auto max-md:top-24"

                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}>
                    <img src={Calories} alt="" />
                    <div >
                        <span className="text-muted">Calories Burned</span>
                        <span className="text-2xl text-white max-md:text-base">220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero