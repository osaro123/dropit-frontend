"use client"
import About from '@/components/About'
import Cta from '@/components/Cta'
import Details from '@/components/Details'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])
  return (
    <div className='sm:w-[80%] w-[90%] mx-auto'>
      <Navbar/>
      <Hero/>
      <Logo/>
      {/* <About/> */}
      <Details/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home