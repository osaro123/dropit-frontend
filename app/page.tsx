import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'

const Home = () => {
  return (
    <div className='sm:w-[80%] w-[90%] mx-auto'>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home