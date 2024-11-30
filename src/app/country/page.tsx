import Navbar from '@/app/components/Navbar';
// import Link from 'next/link';
import React from 'react'

const Country = () => {
  return (
    <div className='m-4 text-center mb-2'>

     <h1 className='text-white text-2xl border-2 p-2 bg-purple-400 m-4'>List Of Countries</h1>
      <Navbar href="/country/pakistan" name='Pakistan'/>
      <Navbar href="/country/saudiarabia" name='Saudi Arabia'/>
      <Navbar href="/country/us" name='US'/>
      <Navbar href="/country/india" name='India'/>
      <Navbar href="/country/china" name='China'/>
    </div>
  )
}

export default Country;