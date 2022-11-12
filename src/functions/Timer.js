import React from 'react'
import { motion } from 'framer-motion'


const Timer = () => {
    return (
        <div className='flex justify-end gap-5 select-none  mb-10 text-white'>
            <div className='flex items-start gap-2  font-Vida '>
                <motion.img whileHover={{ rotate: [0, 360, 360, 0], x: [0, -100, -100, 0] }} src='https://ouch-cdn2.icons8.com/DQYo2kW1qNBJ5ZA1g4MiISIXnybHIOAVK3Lfbnpl7A0/rs:fit:256:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjE5/LzRiOWE3MGRiLTIw/MzMtNDUxOS1iZWVi/LTk3OTk4MGJhY2E3/Yi5zdmc.png' alt='star' className='md:w-16 md:h-16 m-2 w-8 h-8' />
                <motion.span
                    whileHover={{ scale: 1.3, scale: 1.3 }}
                    transition={{ delay: 0.2 }}
                    className='md:text-9xl text-6xl'>{new Date().toLocaleString("en-US", { day: '2-digit' })}</motion.span>
            </div>
            <motion.div whileHover={{ scaleX: 1.3 }}
                transition={{ delay: 0.2 }} className=' font-Saira'>
                <p className='lowercase md:text-5xl text-2xl font-Vida'>{new Date().toLocaleString('en-US', { month: 'short' })}</p>
                <p className='md:text-2xl text-lg'>now available
                    <br /> for work
                </p>
            </motion.div>
        </div>
    )
}

export default Timer