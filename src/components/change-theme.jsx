import React, { useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ChangeTheme = () => {
    const { theme, changeTheme } = useAppContext();

    useEffect(() => {
        const html = document.querySelector('html');
        if (theme === 'dark') {
            html.classList.toggle('dark')
        } else {
            html.classList.remove('dark')
        }
    }, [theme])

    return (
        <div className='bg-amber-500 dark:bg-zinc-400/50 w-10 md:w-16 p-1 fixed top-20 right-2 rounded-full flex items-center justify-start dark:justify-end transition ease-in'>
            {
                theme === 'light' ? <BsFillMoonFill className='transition ease-in delay-1000 text-gray-300 text-sm md:text-base lg:text-2xl cursor-pointer focus:translate-x-5' onClick={() => changeTheme('dark')} />: <BsFillSunFill className='transition ease-in delay-1000 text-amber-500 text-sm md:text-base lg:text-2xl cursor-pointer focus:-translate-x-5' onClick={() => changeTheme('light')} />
            }
        </div>
    )
}

export default ChangeTheme