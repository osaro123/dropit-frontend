"use client"

import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { toast, Toaster } from 'sonner'

const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false)
    const createAccount = (e: FormEvent) => {
        e.preventDefault()
        toast.success('Account Created')
    }
  return (
    <div className='w-[90%] h-screen mx-auto'>
        <Toaster position='top-right' richColors/>
        <h3 className='font-bold py-4'>
            <Link href={"/"}>dropIt</Link>
        </h3>
        <div className='flex items-center h-[calc(100vh-4rem)] max-w-md w-[90%] mx-auto'>
            <form className='w-full' onSubmit={createAccount}>
                <h1 className='text-2xl pb-2 font-bold'>Unlock Seamless <span className='text-[#2563EB]'>Sharing</span></h1>
                <p className='opacity-80 pb-6'>Begin your journey to effortless file and text sharing across all your devices.</p>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="email" className='pb-2 font-medium'>Email Address</label>
                    <input type="email" id='email' className='border-[1px] border-black h-12 px-2 py-3 rounded-md'/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="username" className='pb-2 font-medium'>Username</label>
                    <input type="text" id='username' className='border-[1px] border-black h-12 px-2 py-3 rounded-md'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='py-2 font-medium'>Password</label>
                    <div className='flex items-center gap-1 w-full h-12'>
                        <input type={showPassword ? "text" : "password"} id='password' className='border-[1px] border-black px-2 py-3 rounded-l-md w-[90%]'/>
                        <button 
                            type='button'
                            className='w-[10%] h-12 bg-black text-white flex items-center justify-center rounded-r-md'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                </div>
                <button type='submit' className='text-center bg-black text-white w-full mt-8 py-4 rounded-full hover:bg-black/90'>Create Account</button>
                <p className='pt-2'>Have an account already? <Link href={"/login"} className='underline'>Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp