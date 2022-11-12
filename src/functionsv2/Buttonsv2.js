import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Buttonsv2 = () => {
    return (
        <div className='grid md:grid-cols-3 gap-4 md:gap-0 md:items-center'>
            <div><motion.p whileInView={{ opacity: [0, 1] }} transition={{ delay: 0.2 }} className=' font-Vida text-4xl'>yes these are <br />some buttons,</motion.p></div>
            <Link to='/contact'><motion.button whileHover={{ scale: 1.3 }} className='w-10/12 md:h-16 h-12 border-2 hover:skew-x-6 hover:border-white text-4xl hover:bg-black text-black hover:text-white bg-yellow-50 font-Yantra rounded-2xl' >contact</motion.button></Link>
            <a href='https://github.com/psantosh16' ><motion.button whileHover={{ scale: 1.3 }} className='w-10/12 md:h-16 h-12  border-2 hover:skew-x-6  hover:border-white text-4xl hover:bg-black text-black hover:text-white bg-yellow-50 font-Yantra rounded-2xl' >see other cases</motion.button></a>
        </div>
    )
}

export default Buttonsv2