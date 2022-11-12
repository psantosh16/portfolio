import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 mb-10 text-white'>
                <div>
                    <p className=' font-Vida md:text-5xl text-xl'>creative</p>
                    <p className=' font-Saira md:text-9xl text-7xl'>DESIGNER<span>&</span> <br /> DEVELOPER</p>
                </div>
                <div className='flex flex-col justify-end gap-5 md:mt-0 mt-10'>
                    <p className=' break-words font-Yantra md:text-4xl text-2xl text-justify'>
                        I AM A DEVELOPER AND UI DESIGNER BASED
                        IN INDIA.  I LOVE MINIMAL  AND
                        EXPRESSIVE DESIGN. I LOVE NATURE , TECHNOLOGY AND ART.
                    </p>
                    <div className='flex justify-end '><Link to='/contact' className='w-full h-full'><motion.button whileHover={{ scale: 1.2, x: 10 }} className='w-8/12 h-12 border-2 hover:skew-x-6 hover:border-white text-4xl hover:bg-black hover:text-white text-black bg-white font-Yantra rounded-2xl' >contact</motion.button></Link></div>
                </div>
            </div>
        </>
    )
}

export default Intro