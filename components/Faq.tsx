"use client"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"




const faqs = [
    {
        id: 1,
        question: "How do I share files across different devices?",
        answer: "Simply start a new session and invite other users. Once everyone is connected, you can drag and drop your files into the session, and they’ll instantly sync across all devices."
    },
    {
        id: 2,
        question: "Is there a limit to the type of files I can share?",
        answer: "No, Dropit supports a wide range of media files including images, videos, documents, and audio files. You can share almost any file type seamlessly."
    },
    {
        id: 3,
        question: "How many users can participate in a session?",
        answer: "Each session can support up to 9 users, allowing everyone in your group to share and access files or text in real time."
    },
    {
        id: 4,
        question: "Can I export my session history?",
        answer: "Yes! You can export your session history to formats like PDF, CSV, or TXT, so you have a record of everything that was shared during the session."
    },
    {
        id: 5,
        question: "Is my data secure on Dropit?",
        answer: "Absolutely. Every file shared through Dropit is verified and encrypted, ensuring that your content is secure and only accessible by authorized users."
    },
]

const Faq = () => {
    const [openId, setOpenId] = useState<number | null>(null)

    function handleClick(id: number){
        setOpenId(openId === id ? null : id)
    }




  return (
    <div className='grid grid-cols-2 py-24'>
        <div>
            <h1 className='text-4xl font-bold mb-4 max-w-md'>Frequently asked questions</h1>
            <p className='opacity-60'>Here are some answers to the questions you might have</p>
        </div>
        <div className='flex flex-col gap-4'>
            {faqs.map(({question,answer,id}) => (
                <div key={id} className='border p-6 border-black rounded-md flex justify-between' onClick={()=>handleClick(id)}>
                    <div className='cursor-pointer'>
                        <h3 className='text-lg font-medium'>{question}</h3>
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0
                            }}
                            animate={{
                                opacity: 1,
                                height: 'auto'
                            }}
                            exit={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {openId === id && <p className='mt-4 opacity-80'>{answer}</p>}
                        </motion.div>
                    </div>
                    <div>
                        <Plus className={`${openId === id ? 'rotate-45 transition-all': ''}`}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq