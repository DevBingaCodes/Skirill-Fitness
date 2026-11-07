import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="relative mt-[-4rem] flex flex-col gap-16 px-8">
            <div className="absolute -left-20 top-24 -z-10 h-96 w-[32rem] rounded-full bg-orange/70 blur-[150px]"></div>
            <div className="absolute -right-20 top-40 -z-10 h-96 w-[32rem] rounded-full bg-orange/70 blur-[150px]"></div>
            <div className="flex justify-center gap-8 text-center text-5xl font-bold italic uppercase text-white max-md:flex-col max-md:gap-4 max-md:text-2xl">
                <span className='stroke-text'>READY TO</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            {/*Plans Card*/}
            <div className="flex items-center justify-center gap-12 max-md:flex-col">
                {plansData.map((plan, i) => (
                    <div className={`flex w-60 flex-col gap-8 bg-calorie-card p-6 text-white [&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-orange ${i === 1 ? 'scale-110 bg-plan max-md:scale-100 [&>svg]:fill-white' : ''}`} key={i}>
                        {plan.icon}
                        <span className="text-base font-bold">{plan.name}</span>
                        <span className="text-5xl font-bold">KSH {plan.price}</span>

                        <div className="flex flex-col gap-4">
                            {plan.features.map((feature, featureIndex)=>(
                                <div className="flex items-center gap-4" key={featureIndex}>
                                    <img src={whiteTick} alt="" className="w-4" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-xs">
                            <span>See more benefits - </span>
                        </div>
                        <button className={`flex items-center justify-center border-4 border-transparent bg-white p-2 font-bold text-orange transition-all hover:cursor-pointer ${i === 1 ? 'text-orange' : ''}`}>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans