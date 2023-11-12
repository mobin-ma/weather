import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const Weather = ({ weather }) => {
  // Get the current time
  const currentTime = new Date().getHours();
  const mobin = currentTime >= currentTime ? currentTime + 7 : 10
  console.log(mobin);
  // Get the next 7 hours of forecast data
  const next7Hours = weather.data.forecast.forecastday[0].hour.slice(currentTime, mobin);

  return (
    <div className='w-full flex flex-col items-center gap-10'>
      <div className='w-full flex items-center justify-center gap-3 md:gap-10'>
        <div className='w-full flex justify-end items-center gap-3 md:gap-10 border-r border-gray-500\50 pr-3 md:pr-10'>
          <img className='w-[11rem] lg:w-[9rem] h-auto' src={weather.data.current.condition.icon} alt="weather" />
          <p className='font-bold dark:text-white text-7xl lg:text-[15rem] transition ease-in after:content-["\00b0"] after:font-light'>{weather.data.current.temp_c}</p>
        </div>
        <div className='w-full flex flex-col items-start gap-3 font-thin text-4xl lg:text-7xl dark:text-white transition ease-in'>
          <p className='text-lg md:text-3xl font-normal'>{weather.data.current.condition.text}</p>
          <div className='flex items-center gap-3'>
            <FaLocationDot />
            <span>{weather.data.location.country},</span>
            <span>{weather.data.location.name}</span>
          </div>
        </div>
      </div>

      <div className='w-full grid items-center justify-around grid-cols-3 lg:grid-cols-6 gap-3'>
        {next7Hours.map((hour) => (
          <div key={hour.time} className='w-full flex flex-col items-center justify-center gap-3'>
            <div className='font-bold dark:text-white border-b border-gray-400 dark:border-gray-200 p-3 transition ease-in'>
              <p className='after:content-["\00b0"] after:font-light after:pl-2'>{hour.temp_c}</p>
            </div>
            <div className='dark:text-white transition ease-in'>
              <p>{hour.time.split(' ')[1].split(':')[0]}:00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// weather.data.current.condition.text
export default Weather