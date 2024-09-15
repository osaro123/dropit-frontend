import { UploadCloudIcon } from 'lucide-react'
import React from 'react'

const features= [
    {
        title: "LOREM",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repudiandae sunt dolorem perspiciatis veritatis, numquam rerum dolore exercitationem sit saepe minima facilis adipisci doloribus accusamus nihil dolores modi rem necessitatibus?",
    },
    {
        title: "LOREM",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repudiandae sunt dolorem perspiciatis veritatis, numquam rerum dolore exercitationem sit saepe minima facilis adipisci doloribus accusamus nihil dolores modi rem necessitatibus?",
    },
    {
        title: "LOREM",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repudiandae sunt dolorem perspiciatis veritatis, numquam rerum dolore exercitationem sit saepe minima facilis adipisci doloribus accusamus nihil dolores modi rem necessitatibus?",
    },
    {
        title: "LOREM",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repudiandae sunt dolorem perspiciatis veritatis, numquam rerum dolore exercitationem sit saepe minima facilis adipisci doloribus accusamus nihil dolores modi rem necessitatibus?",
    },
]

const Features = () => {

  return (
    <div>
        <h1 className='text-3xl font-bold mb-2'>Features</h1>
        <h3 className='opacity-60'>What we have to offer</h3>
        <div className='pt-16 grid grid-cols-3  gap-4'>
            {features.map(({title,description},i) => (
                <div className={`${i == 0 ? "col-span-2" : ""} border p-12 ${i == 3 ? "col-span-2" : ""} cursor-pointer bg-[#eee] bg-opacity-20 rounded-md relative`} key={i}>
                    <div className='border inline-block rounded-full p-4'>
                        <UploadCloudIcon/>
                    </div>
                    <h3 className='text-2xl font-semibold pb-4'>{title}</h3>
                    <p className='opacity-80 max-w-[500px]'>{description}</p>
                    <p className='absolute top-0 right-4 text-9xl opacity-5'>{`0${i+1}`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features