import React, { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Test = () => {

    const transition = { type: "spring", duration: 3 }
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length
    return (
        <div className="flex gap-4 px-8 text-white max-md:flex-col">
            <div className="flex flex-1 flex-col gap-8 uppercase">
                <span className="font-bold text-orange">Reviews</span>
                <span className="text-5xl font-bold max-md:text-3xl"><span className="stroke-text">Testimonials about</span></span>
                <span className="text-5xl font-bold max-md:text-3xl">our services</span>
                <motion.span
                    key={selected}
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    className="text-justify normal-case leading-10 tracking-widest"
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span className="text-orange">
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="relative min-h-[24rem] flex-1 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                    className="absolute right-36 top-4 h-80 w-[17rem] border-2 border-orange bg-transparent max-md:hidden"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                    className="absolute right-28 top-16 h-[19rem] w-[17rem] bg-plan max-md:hidden"
                ></motion.div>
                <motion.img
                    key={selected}
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="Customer testimonial" className="absolute right-32 top-8 h-80 w-[17rem] object-cover max-md:relative max-md:right-auto max-md:top-0" />
                <div className="absolute bottom-4 left-12 flex gap-4 max-md:relative max-md:bottom-auto max-md:left-auto">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                        src={leftArrow}
                        alt="Previous testimonial" className="w-6 cursor-pointer" />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                        src={rightArrow} alt="Next testimonial" className="w-6 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Test