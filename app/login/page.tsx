"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React, {useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import {z} from "zod"

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

type FormFields = z.infer<typeof schema>

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {errors,isSubmitting}
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    })
    const login: SubmitHandler<FormFields> = () => {
        toast.success("Login Succesful")
    }
  return (
    <div className='w-[90%] h-screen mx-auto'>
        <Toaster position='top-right' richColors/>
        <h3 className='font-bold py-4 cursor-pointer'>
            <Link href={"/"}>dropIt</Link>
        </h3>
        <div className='flex items-center h-[calc(100vh-4rem)] max-w-md w-[90%] mx-auto'>
            <form className='w-full' onSubmit={handleSubmit(login)}>
                <h1 className='text-2xl pb-2 font-bold'>Unlock Seamless <span className='text-[#2563EB]'>Sharing</span></h1>
                <p className='opacity-80 pb-6'>Begin your journey to effortless file and text sharing across all your devices.</p>
                <div className={`flex flex-col ${errors.email ? "mb-1" : "mb-4"}`}>
                    <label htmlFor="email" className='pb-2 font-medium'>Email Address</label>
                    <input {...register("email")} type="email" id='email' className='border-[1px] border-black h-12 px-2 py-3 rounded-md'/>
                </div>
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                <div className='flex flex-col mb-1'>
                    <label htmlFor="password" className='py-2 font-medium'>Password</label>
                    <div className='flex items-center gap-[0.15rem] w-full h-12'>
                        <input {...register("password")} type={showPassword ? "text" : "password"} id='password' className='border-[1px] border-black px-2 py-3 h-12 rounded-l-md w-[90%]'/>
                        <button 
                            type='button'
                            className='w-[10%] h-12 bg-black text-white flex items-center justify-center px-2 rounded-r-md'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20}/>}
                        </button>
                    </div>
                </div>
                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                <button
                    disabled={isSubmitting}
                    type='submit'
                    className='text-center bg-black text-white w-full mt-8 py-4 rounded-full hover:bg-black/90'
                >{isSubmitting ? "Loading" : "Login"}</button>
                <p className='pt-2'>Don{"'"}t have an account? <Link href={"/sign-up"} className='underline'>Create Account</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login