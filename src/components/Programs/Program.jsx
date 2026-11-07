import React from 'react'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Program = () => {
    return (
        <div className="flex flex-col gap-8 px-8" id="programs">
            {/*Header*/}
            <div className="flex justify-center gap-20 text-center text-5xl font-bold italic uppercase text-white max-md:mt-8 max-md:flex-col max-md:items-center max-md:gap-4 max-md:text-2xl">
                <span className='stroke-text'>Explore our</span>
                <span>programs</span>
                <span className='stroke-text'>to shape you.</span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {programsData.map((program)=>(
                    <div className="flex flex-col justify-between gap-4 bg-gray-500 p-8 text-white transition-colors hover:cursor-pointer hover:bg-plan [&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-white" key={program.heading}>
                        {program.image}
                        <span className="text-base font-bold">{program.heading}</span>
                        <span className="text-sm leading-6">{program.details}</span>
                        <div className="flex items-center gap-8">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Program