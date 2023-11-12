import React, { useEffect, useState } from 'react'
import { TbClockHour9 } from 'react-icons/tb'

const HoursAndDate = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        // تابع برای به دست آوردن روز هفته فعلی
        const getCurrentDay = () => {
            const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            const dayIndex = currentTime.getDay();
            return daysOfWeek[dayIndex];
        };

        // تابع برای به دست آوردن زمان جاری
        const updateClock = () => {
            setCurrentTime(new Date());
            setCurrentDay(getCurrentDay());
        };

        // فراخوانی تابع برای به‌روز‌رسانی هر ثانیه
        const intervalId = setInterval(updateClock, 1000);

        // حذف interval در هنگام حذف کامپوننت
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