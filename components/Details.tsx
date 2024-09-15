import Image from 'next/image'
import React from 'react'

const details = [
    {
        title: "Seamless Sharing, Instant Syncing",
        description: "Instantly sync shared files and text across devices. With sessions supporting up to 9 users, everyone stays connected in real time."
    },
    {
        title: "Instant Access to Shared Text Content",
        description: "Get immediate access to shared text—whether it’s notes, URLs, or essential information—right when you need it."
    },
    {
        title: "Effortless Media Sharing",
        description: "No limits on file type. Share images, videos, and audio files with ease, supported across all devices with perfect fidelity"
    },
    {
        title: "Export History, Your Way",
        description: "Need a record? Export your session history to formats like PDF, CSV, or TXT, giving you the flexibility to review and store important data"
    },
    {
        title: "Verified for Secure Sharing",
        description: "Every file comes with a verified checkmark, reassuring you that your content is secure and authentic."
    },
]

const Details = () => {
  return (
    <div className='grid grid-cols-2 py-[72px]'>
        <div className='sticky top-20 mb-8 h-fit'>
            <h1 className='text-3xl font-bold pb-2'>Sharing Simplified</h1>
            <p className='opacity-80 max-w-[350px]'>Every file, every message, perfectly synced across your devices.</p>
        </div>
        <div className='sticky'>
            {details.map(({title,description},i) => (
                <div className='mb-12' key={i}>
                    <div className='bg-[#eeeeee] bg-opacity-40 w-full h-[200px] rounded-md mb-4'>
                        {/* <Image src={} alt={title}/> */}
                    </div>
                    <h3 className='text-[#2563EB] mb-1 text-sm'>{title}</h3>
                    <p className='text-[18px]'>{description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Details