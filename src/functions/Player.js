import React, { useState, useEffect } from "react";
// import music from '../assets/music.mp3'
import music2 from '../assets/music2.mp3'
import { motion } from 'framer-motion'


const useAudio = () => {
    const [audio] = useState(new Audio(music2));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.pause() : audio.play();
    },// eslint-disable-next-line
        [playing]
    );
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(true));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(true));
        };
    },
        // eslint-disable-next-line 
        []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div className="mb-10">
            <motion.button whileHover={{ scale: 1.2, x: 10 }} className="w-fit h-8 px-8 md:px-8 md:py-4 md:flex md:items-center border-2 hover:-skew-x-6 hover:border-white text-xl md:text-2xl text-black hover:bg-black hover:text-white bg-white font-Yantra rounded-2xl" onClick={toggle}><p>{!playing ? "Pause" : "Play"}</p></motion.button>
        </div>
    );
};

export default Player;