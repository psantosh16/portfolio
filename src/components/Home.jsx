import React from 'react'
import Timer from '../functions/Timer'
import Intro from '../functions/Intro'
import Player from '../functions/Player'
import Basic from '../functions/Basic'
import Work from './Work';
import Contact from './Contact';
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <motion.div className='m-10 mb-44 '
                animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
                transition={{ delay: 0.4 }}
            >
                <Timer />
                <Intro />
                <Player />
                <Basic />
            </motion.div>
            <div className='my-20 mb-44'>
                <Work />
            </div>
            <div className='my-20 '>
                <Contact />
            </div>
        </>
    )
}

export default Home




