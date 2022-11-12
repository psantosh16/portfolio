import React from 'react'
import Btn from '../functionv3/Btn'
import { motion } from 'framer-motion'

const Connect = () => {
    return (
        <>
            <div>
                <p className='text-5xl  md:text-8xl font-Vida mt-20'>LET'S <br /> CONNECT</p>
                <p className=' font-Saira text-3xl mb-8'>I'am always intrested about</p>
                <div className='grid md:flex gap-4 md:gap-10'>
                    <Btn text='ui design' />
                    <Btn text='frontend developer' />
                    <Btn text='reactjs' />
                </div>
                <div className='flex md:gap-10 gap-4 md:mt-8 mt-4 mb-20'>
                    <Btn text='startup' />
                    <Btn text='music & art' />
                </div>

                <div>
                    <p className='uppercase font-Saira text-4xl mb-5'>Have something in mind?</p>
                    <a href='mailto:santoshphadtare1610@gmail.com' className='w-full h-full'><motion.button whileHover={{ scale: 1.3 }} className='w-fit h-12 px-4 border-2 hover:skew-x-6 hover:border-white text-4xl hover:bg-black text-black hover:text-white bg-yellow-50 font-Yantra rounded-2xl' >contact</motion.button></a>
                </div>
            </div>
        </>
    )
}

export default Connect