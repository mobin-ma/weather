import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useAppContext } from '../context/app-context';

const Menu = () => {
    const { toggleMenu } = useAppContext();
    return (
        <div className='w-1/2 md:w-1/3 lg:w-2/12 h-full px-2 pt-16 bg-zinc-200 dark:bg-[#504d6d] transition ease-in dark:text-white fixed top-0 left-0'>
            <ul className='w-full divide-y divide-black flex flex-col justify-center gap-5'>
                <li className='self-end'><AiOutlineClose className='text-red-600 font-bold text-2xl cursor-pointer' onClick={() => toggleMenu('close')} /></li>
                <li>home</li>
                <li>about</li>
                <li>cantact</li>
                <li>instagram</li>
                <li>linkedan</li>
            </ul>
        </div>
    )
}

export default Menu