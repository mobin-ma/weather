import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { useAppContext } from '../context/app-context'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const { loca, setLocation } = useAppContext();
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`search/${loca}`)
  }
  return (
    <form onSubmit={submitHandler} className='flex-1 px-2 w-full h-full relative transition ease-in'>
      <input type="text" className='w-full h-full pl-10 border-none focus:ring-0 bg-transparent' placeholder='Enter name city....' onChange={(e) => setLocation(e.target.value)} />
      <FaLocationDot className='absolute inset-y-6 left-6 text-' />
    </form>
  )
}

export default SearchBox