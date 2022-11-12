import React from 'react'
import { motion } from 'framer-motion'

const Basic = () => {
    return (
        <div className='md:grid md:grid-cols-2 flex flex-col mt-44 select-none'>
            <div className=' order-2 md:order-1'>
                <p className='md:text-8xl text-5xl font-Vida'>I'AM SANTOSH</p>
                <div className='flex justify-center md:mb-12 mb-4 '><p className=' font-Yantra md:text-4xl text-xl md:ml-60 hover:line-through'>Developer</p></div>
                <div>
                    <p className=' break-words md:text-5xl text-2xl w-11/12 text-justify'>Hello stranger! 👋, my name is santosh phadtare and I am a frontend developer, passionate
                        about digital products that help people experience everyday life, not endure it.</p>
                </div>
            </div>
            <div className='flex flex-col items-center md:mt-0 mt-10 order-1 md:order-2'>
                <motion.img whileHover={{ scale: [1, 1.5, 1.5, 1] }} transition={{ duration: 5 }} src='https://media1.giphy.com/media/3ornjNM6wlq8i87aQU/giphy.gif?cid=ecf05e47gh3iqw56tzi2321o2fckkgurja0x8rwddjfr4uru&rid=giphy.gif&ct=g' className='w-fit h-full  hover:opacity-60 select-none' alt='Inspiration' />
                {/* <p className=' font-Saira'>Inspiration</p> */}
            </div>
        </div>
    )
}

export default Basic