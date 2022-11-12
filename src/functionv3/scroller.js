import React from 'react'
import '../index.css'

const scroller = () => {
    return (<>
        <p className=' font-Vida text-sm md:text-lg'>QUALITIES</p>
        <div className=' overflow-hidden '>
            <p id='scroll-text' className='font-Saira md:text-5xl text-3xl ease-in-out tracking-wide'>CREATIVE, UI DESIGNER, FRONTEND DEVELOPER, TECHIE, ARTIST, VIDEO EDITOR </p>
            <div className=' opacity-90'>  <hr className='border-white border-1' /></div>
        </div>
    </>

    )
}

export default scroller