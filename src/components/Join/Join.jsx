import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9dwg0yb', 'template_rx6qblc', form.current, 'FdmN7D6KATfmnUDOE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="flex gap-40 px-8 max-md:flex-col max-md:gap-4" id="join-us">
            <div className="relative text-5xl font-bold uppercase text-white max-md:text-2xl">
                <hr className="absolute -mt-2.5 w-[10.5rem] rounded-[20%] border-2 border-orange" />
                <div className="flex gap-4">
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div className="flex gap-4">
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US</span>
                </div>
            </div>
            <div className="flex items-end justify-center">
                <form ref={form} className="flex gap-12 bg-gray-500 px-8 py-4 max-md:flex-col max-md:gap-4" onSubmit={sendEmail}>
                    <input className="min-w-0 bg-transparent text-light-grey outline-none placeholder:text-light-grey" type="email" name='user_email' placeholder='Enter your e-mail address' />
                    <button className="flex items-center justify-center border-4 border-transparent bg-orange p-2 font-bold text-white transition-all hover:cursor-pointer">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join