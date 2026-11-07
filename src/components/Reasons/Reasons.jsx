import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className="flex gap-8 px-8 max-md:flex-col" id="reasons">
            <div className="grid flex-1 auto-rows-fr grid-cols-3 gap-4 overflow-hidden max-md:auto-rows-auto">
                <img src={image1} alt="" className="row-span-2 h-[28rem] w-48 object-cover max-md:h-[17rem] max-md:w-28" />
                <img src={image2} alt="" className="col-span-2 h-64 w-full object-cover max-md:h-40" />
                <img src={image3} alt="" className="h-full w-56 object-cover max-md:w-28" />
                <img src={image4} alt="" className="h-44 w-40 object-cover max-md:h-24 max-md:w-28" />
            </div>
            <div className="flex flex-1 flex-col gap-4 uppercase">
                <span className="font-bold text-orange">Reasons to choose us</span>
                <div className="text-5xl font-bold text-white">
                    <span className='stroke-text'>Why</span>
                    <span> choose us</span>
                </div>

                <div className="flex flex-col gap-4 text-white">
                    <div className="flex items-center gap-4">
                        <img src={tick} alt="" className="h-8 w-8" />
                        <span>MORE THAN 50 EXPERT COACHES AVAILABLE TO GUIDE YOU</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={tick} alt="" className="h-8 w-8" />
                        <span>ACHIEVE YOUR FITNESS GOALS WITH MORE POWER</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={tick} alt="" className="h-8 w-8" />
                        <span>ENJOY A COMPLEMENTARY PROGRAM AS A NEW MEMBER</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={tick} alt="" className="h-8 w-8" />
                        <span>TRUSTWORTHY COLLABORATORS</span>
                    </div>
                </div>
                <span className="font-normal text-muted">OUR ASSOCIATES</span>

                <div className="flex gap-4">
                    <img src={nb} alt="New Balance" className="w-10" />
                    <img src={adidas} alt="Adidas" className="w-10" />
                    <img src={nike} alt="Nike" className="w-10" />
                </div>
            </div>
        </div>
    )
}

export default Reasons