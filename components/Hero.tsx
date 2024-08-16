"use client"
import {MoveRight} from "lucide-react"
import {motion} from "framer-motion"
import Link from "next/link"

const Hero = () => {
  return (
    <div className='pt-32'>
        <motion.div 
            className='mb-2 border-[1px] border-black rounded-full inline-flex items-center gap-2 px-8 py-1'
        >
            <small className='text-sm bg-[linear-gradient(to_right,#2563EB,#000)] text-transparent bg-clip-text [-webkit-background-clip:text]'>dropIt v2.0 is here</small>
            <motion.div
                whileHover={{ x: 5 }} // Moves the arrow 5px to the right on hover
                transition={{ type: "spring", stiffness: 300 }} // Adds a springy effect
            >
                <MoveRight />
            </motion.div>
        </motion.div>
        <h1 className='tracking-tighter font-bold text-6xl max-w-xl'>Seamless <span className="text-[#2563EB]">Sharing</span>, Instant Syncing</h1>
        <p className='max-w-[400px] pt-4 pb-8'>Your Gateway to Effortless File and Text Sharing Across Devices
        Bridging Cross-platform Gaps</p>
        <Link href={"/sign-up"} className="px-6 py-3 rounded-md bg-black text-white hover:bg-opacity-90">Get Started</Link>
        <motion.div 
            className='w-full bg-[#eee] h-[600px] rounded-md my-24'
            initial={{
                opacity:0,
                scale: 0.5
            }}
            transition={{duration: .4}}
            animate={{
                opacity:1,
                scale: 1
            }}
        >
        </motion.div>
    </div>
  )
}

export default Hero