import React from 'react'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="relative">
            <hr className="border-light-grey" />
            <div className="flex h-80 flex-col items-center justify-center gap-16 px-8 py-4">
                <div className="flex gap-16">
                    <img src={Github} alt="GitHub" className="h-8 w-8 cursor-pointer" />
                    <img src={Instagram} alt="Instagram" className="h-8 w-8 cursor-pointer" />
                    <img src={LinkedIn} alt="LinkedIn" className="h-8 w-8 cursor-pointer" />
                </div>
                <div>
                    <img src={Logo} alt="Fitness IO" className="w-40" />
                </div>
            </div>

            <div className="absolute -bottom-4 right-[15%] -z-10 h-48 w-[26rem] rounded-full bg-red-600 blur-[200px]"></div>
            <div className="absolute -bottom-4 left-[15%] -z-10 h-48 w-[26rem] rounded-full bg-orange blur-[200px]"></div>
        </div>
    )
}

export default Footer