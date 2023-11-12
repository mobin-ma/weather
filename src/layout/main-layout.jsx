import React from 'react'
import SearchBox from '../components/search-box'
import HoursAndDate from '../components/hours-date'
import { Outlet } from 'react-router-dom'
import ChangeTheme from '../components/change-theme'
import Menu from '../components/menu'
import { HiMenu } from 'react-icons/hi'
import { useAppContext } from '../context/app-context'

const MainLayout = () => {
    const { menu, toggleMenu } = useAppContext();

    return (
        <div className='w-full h-screen bg-new-york bg-no-repeat bg-clip-padding bg-center flex flex-col'>
            <div className='w-full bg-zinc-200 dark:bg-[#43415b] dark:text-white flex items-center justify-between shadow-xl transition ease-in'>
                <div className='bg-rose-500 dark:bg-[#53acc5] p-5 transition ease-in text-white font-bold text-base md:text-xl'>logo</div>
                <SearchBox />
                <ChangeTheme />
                <HoursAndDate />
            </div>
            <div className='w-full h-full bg-gradient-to-t from-zinc-300 to-zinc-300/80 dark:bg-gradient-to-t dark:from-[#2e2c49] dark:to-[#2e2c49]/70 flex flex-col items-center gap-28 transition ease-in'>
                <div className='flex items-center self-start gap-3 p-3'>
                    {
                        menu === 'open' ? <Menu /> : <HiMenu className='text-4xl text-black dark:text-white transition ease-in cursor-pointer' onClick={() => toggleMenu('open')} />
                    }
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout