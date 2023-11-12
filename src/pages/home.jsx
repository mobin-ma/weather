import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full px-5 lg:px-0 lg:w-2/4 flex flex-col items-center justify-center gap-6'>
            <h1 className='w-full text-4xl md:text-6xl text-center lg:text-left font-bold dark:text-white transition ease-in'>Welcome to Weather website</h1>
            <p className='w-full dark:text-white text-center lg:text-left transition ease-in line-clamp-4 md:line-clamp-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to='/search/paris' className='bg-rose-500 hover:bg-rose-800 dark:bg-[#443e7a] dark:hover:bg-[#312d53] text-white md:py-3 py-1 md:px-5 px-3 rounded-full font-bold transition ease-in'>Let's go</Link>
        </div>
    )
}

export default Home;