"use client"
import Link from 'next/link'
import React, { ReactNode } from 'react'
import {motion} from "framer-motion"

type linkProp = {
    children: ReactNode,
    href: string
}

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between items-center py-4'>
        <div>
            <h3 className='font-bold'>dropIt</h3>
        </div>
        <ul className='flex items-center gap-4 text-sm'>
            <FlipLink href='#pricing'>Pricing</FlipLink>
            <motion.li
                whileHover={{scale: 1.02}}
            >
                <Link href={"/sign-up"} className='bg-black text-white px-4 py-2 rounded-md cursor-pointer'>Sign Up</Link>
            </motion.li>
        </ul>
    </nav>
  )
}

const FlipLink = ({children,href}: linkProp) => {
    return (
        <motion.a 
            initial="initial"
            whileHover="hovered"
            href={href}
            className='relative block overflow-hidden whitespace-nowrap cursor-pointer text-black'
        >
            <motion.div
                variants={{
                    initial: {y: 0},
                    hovered: {y: "-100%"}
                }}
            >
                {children}
            </motion.div>
            <motion.div
                className='absolute inset-0'
                variants={{
                    initial: {y: "100%"},
                    hovered: {y: 0}
                }}
            >
                {children}
            </motion.div>
        </motion.a>
    )
}

export default Navbar