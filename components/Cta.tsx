import { RocketIcon } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <div className=' relative flex flex-col gap-5 py-24 bg-[#2563EB] mb-8 rounded-2xl'>
        <h3 className=' self-center font-bold text-[40px] text-white'>Ready to transfer files with ease?</h3>
        <p className=' self-center text-xl text-white'>Take your files transfers into your own hands</p>
        <div className=' flex align-center justify-center gap-5'>
        <button className=' bg-white text-black p-4 rounded-full font-bold'>Get started today </button>
        <RocketIcon color='white' size={360} className=' opacity-5 absolute top-5 right-10'/>
        </div>
            </div>
  )
}

export default Cta