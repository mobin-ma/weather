import React, { useEffect, useState } from 'react'
import { TbClockHour9 } from 'react-icons/tb'

const HoursAndDate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        // Function to get the current day of the week
        const getCurrentDay = () => {
            const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            const dayIndex = currentTime.getDay();
            return daysOfWeek[dayIndex];
        };

        // Function to get the current time
        const updateClock = () => {
            setCurrentTime(new Date());
            setCurrentDay(getCurrentDay());
        };

        // Call the function to update every second
        const intervalId = setInterval(updateClock, 1000);

        // Remove the interval when removing the component
        return () => clearInterval(intervalId);
    }, [currentTime]);
    return (
        <div className='px-3 flex flex-col md:flex-row items-center gap-2 font-bold'>
            <span className='text-sm md:text-lg flex items-center gap-2'>
                <TbClockHour9 className='text-base md:text-xl' />
                {currentDay}
            </span>
            <span className='text-sm md:text-lg'>{currentTime.toLocaleTimeString()}</span>
        </div>
    )
}

export default HoursAndDate