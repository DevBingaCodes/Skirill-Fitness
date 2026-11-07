import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className="flex items-center justify-between">
            <img src={Logo} alt="Fitness IO" className="h-12 w-40 object-contain" />
            <button
                type="button"
                aria-label={menuOpened ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpened}
                className="z-[100] rounded bg-app p-2 md:hidden"
                onClick={() => setMenuOpened(!menuOpened)}
            >
                <img src={Bars} alt="" className="h-6 w-6" />
            </button>
            <ul className={`${menuOpened ? 'flex' : 'hidden'} fixed right-8 top-20 z-[99] flex-col gap-8 bg-app p-8 text-white md:static md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0`}>
                    <li><Link className="cursor-pointer hover:text-orange" onClick={() => setMenuOpened(false)}
                        to='home'
                        activeClass='active'
                        spy={true}
                        smooth={true}>Home</Link></li>
                    <li><Link className="cursor-pointer hover:text-orange" onClick={() => setMenuOpened(false)}
                        to='programs'
                        spy={true}
                        smooth={true}>Programs</Link></li>
                    <li><Link className="cursor-pointer hover:text-orange" onClick={() => setMenuOpened(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}>Why us</Link></li>
                    <li><Link className="cursor-pointer hover:text-orange" onClick={() => setMenuOpened(false)}
                        to='plans'
                        spy={true}
                        smooth={true}
                        >Plans</Link></li>
                    <li><Link className="cursor-pointer hover:text-orange"
                        onClick={() => setMenuOpened(false)}
                        to='Testimonials'
                        spy={true}
                        smooth={true}
                    >Testimonials</Link></li>
                </ul>
        </div>
    )
}

export default Header