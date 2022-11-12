import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className='m-10'>
            <hr className='opacity-90 border-white mb-4 w-full' />
            <div className='flex gap-2 md:gap-10 font-Vida text-lg md:text-3xl justify-between'>
                <div className='flex gap-4'>
                    <motion.p whileHover={{ scaleY: 2 }} className='hover:skew-x-6 hover:text-blue-400'><a href='https://www.linkedin.com/in/santosh-phadtare-20ef16'>LINKEDIN</a></motion.p>
                    <motion.p whileHover={{ scaleY: 2 }} className='hover:skew-x-6 hover:text-red-400'><a href='https://www.instagram.com/_i_santoshp/'>INSTAGRAM</a></motion.p>
                    <motion.p whileHover={{ scaleY: 2 }} className='hover:skew-x-6 hover:text-blue-400'><a href='https://github.com/psantosh16'>GITHUB</a></motion.p>
                </div>
                <div className='flex items-center'>
                    <p className=' text-black text-sm md:text-xl hover:text-red-600'><a href='https://santosh-phadtare.netlify.app/'>v1</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer