import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home