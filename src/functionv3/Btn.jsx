import React from 'react'
import { motion } from 'framer-motion'

const Btn = (props) => {
    return (
        <motion.button whileHover={{ scale: 1.3 }} className='w-fit px-3 py-2 hover:bg-black text-black hover:text-white hover:border-white bg-yellow-50 rounded-2xl border-2 hover:skew-x-12 text-xl md:text-3xl font-Yantra uppercase'>{props.text}</motion.button>

    )
}
export default Btn