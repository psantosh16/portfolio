import React from 'react'
// import star from '../assets/star.png'
import { motion } from 'framer-motion'


const Cases = () => {
    return (
        <div>
            <div className='flex items-end md:gap-4 gap-2 mt-20'>
                <motion.img animate={{ rotate: [0, 360, 360, 0], scale: [1, 1.5, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} src='https://ouch-cdn2.icons8.com/DQYo2kW1qNBJ5ZA1g4MiISIXnybHIOAVK3Lfbnpl7A0/rs:fit:256:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjE5/LzRiOWE3MGRiLTIw/MzMtNDUxOS1iZWVi/LTk3OTk4MGJhY2E3/Yi5zdmc.png' alt='star-icon' className='w-8 h-8 m-2 ' />
                <p className=' font-Saira text-4xl md:text-6xl mt-10'>SELECTED CASES :-</p>
            </div>
            <div className='bg-blue-50 border-black border-2 text-black hover:bg-blue-100 flex flex-col md:flex-row rounded-2xl items-center md:gap-10 gap-5 my-5 py-4 justify-around'>
                <div className='flex flex-col py-4 text-center'>
                    <p className='md:text-8xl text-5xl font-Vida hover:line-through hover:skew-y-3'>PLANET-X</p>
                    <p className='md:text-4xl text-2xl font-Saira hover:line-through hover:skew-y-3'>infomatic website</p>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img className='w-8/12 rounded-2xl' src='https://cdn.dribbble.com/users/1644453/screenshots/8949293/spaceedu_2.png?compress=1&resize=400x300' alt='planet-preview' />
                    <a href='https://psantosh16.github.io/Planet-X/'><motion.button whileHover={{ scale: 1.3 }} className='w-44 rounded-2xl border-2 border-black hover:bg-black hover:text-white hover:border-white bg-yellow-50 font-Yantra text-2xl text-black cursor-pointer'>visit</motion.button></a>
                </div>
            </div>
            <div className='grid md:grid-cols-2 mb-10 md:gap-8 gap-5'>
                <div className='bg-slate-50 text-black border-2 border-black hover:bg-slate-100 flex flex-col rounded-2xl items-center gap-5 py-4 text-center'>
                    <p className=' text-5xl md:text-6xl font-Vida hover:line-through hover:skew-y-3'>HACKTOBER <br /> FEST 2022</p>
                    <p className=' text-2xl font-Saira hover:line-through hover:skew-y-3'>contributor</p>
                    <a href='https://github.com/psantosh16'><motion.button whileHover={{ scale: 1.3 }} className='w-44 rounded-2xl border-2 border-black hover:bg-black hover:text-white hover:border-white bg-yellow-50 font-Yantra text-2xl text-black cursor-pointer'>view</motion.button></a>
                </div>

                <div className='bg-orange-50 hover:bg-orange-100 border-2 border-black  text-black flex flex-col rounded-2xl items-center gap-5 py-4 text-center'>
                    <p className='text-5xl md:text-6xl font-Vida hover:line-through hover:skew-y-3'>FOOD ENGINEER'S</p>
                    <p className=' text-2xl font-Saira hover:line-through hover:skew-y-3'>e-commerce website</p>
                    <a href='https://foodengineers.netlify.app'><motion.button whileHover={{ scale: 1.3 }} className='w-44 rounded-2xl border-2 border-black hover:bg-black hover:text-white hover:border-white bg-yellow-50 font-Yantra text-2xl text-black cursor-pointer'>visit</motion.button></a>
                </div>
                <div className='bg-green-50 hover:bg-green-100 border-2 border-black  text-black flex flex-col rounded-2xl items-center gap-5 py-4 text-center'>
                    <p className='text-5xl md:text-6xl font-Vida hover:line-through hover:skew-y-3'>Starbuck's Clone</p>
                    <p className=' text-2xl font-Saira hover:line-through hover:skew-y-3'>website</p>
                    <a href='https://webclone-starbucks.netlify.app'><motion.button whileHover={{ scale: 1.3 }} className='w-44 rounded-2xl border-2 border-black hover:bg-black hover:text-white hover:border-white bg-yellow-50 font-Yantra text-2xl text-black cursor-pointer'>visit</motion.button></a>
                </div>
                <div className='bg-orange-50 text-black border-2 border-black hover:bg-orange-100 flex flex-col rounded-2xl items-center gap-5 py-4 text-center'>
                    <p className=' text-5xl md:text-6xl font-Vida hover:line-through hover:skew-y-3'>News - HomePage <br /></p>
                    <p className=' text-2xl font-Saira hover:line-through hover:skew-y-3'>news website</p>
                    <a href='https://newsapp-homepage.netlify.app'><motion.button whileHover={{ scale: 1.3 }} className='w-44 rounded-2xl border-2 border-black hover:bg-black hover:text-white hover:border-white bg-yellow-50 font-Yantra text-2xl text-black cursor-pointer'>visit</motion.button></a>
                </div>
            </div>
        </div>
    )
}

export default Cases

