import Link from 'next/link'
import {FaCircleCheck} from 'react-icons/fa6'
import {IoCloseCircle} from 'react-icons/io5'

const pricingData = [
    {
        plan: "Basic",
        amount: 0,
        description: "Get pro features and benefits with our single license user.",
        perks: [
            {description: "3 users in a session",available: true},
            {description: "Access to shared text Content",available: true},
            {description: "Cannot view shared media Content",available: true},
            {description: "Cannot export to desired file format",available: false},
            {description: "only Images and Video support",available: false},
            {description: "No File Label",available: false},
        ]
    },
    {
        plan: "Pro",
        amount: 1.99,
        description: "Unlock productivity with our Team plan for 6 users.",
        perks: [
            {description: "9 users in a session",available: true},
            {description: "Access to shared text Content",available: true},
            {description: "Access to shared media Content",available: true},
            {description: "Export History to desired format",available: true},
            {description: "Verified checkmark",available: true},
            {description: "All Media files supported",available: true},
            {description: "File Label",available: true},
            {description: "Drop connection stats",available: true},
        ]
    },
]

const Pricing = () => {
  return (
    <div id='pricing'>
        <h3 className='text-center font-semibold text-3xl mt-40 mb-2'>Choose Your Plan</h3>
        <p className='text-center opacity-60'>We provide a very simple and transparent pricing model</p>
        <div className='py-16 grid md:grid-cols-2 grid-cols-1 gap-8 sm:w-[75%] w-[90%] mx-auto'>
            {pricingData.map((pricing,i) => (
                <div key={i} className='border-[1px] border-black p-8 rounded-md'>
                    <h3>{pricing.plan}</h3>
                    <div className='flex items-center py-4'>
                        <p className='text-4xl font-bold'>{`$${pricing.amount}`}</p>
                        <span className='self-end text-sm opacity-80'>/month</span>
                    </div>
                    <p className='pb-4'>{pricing.description}</p>
                    <ul className='mb-4'>
                        {pricing.perks.map(({description,available},i) => (
                            <li key={i} className='pb-2 flex items-center gap-2'>
                                {available ? <FaCircleCheck /> : <IoCloseCircle size={20}/>}
                                <p>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <Link href={"/sign-up"} className='bg-black text-white px-8 py-2 rounded-md hover:bg-black/90'>Join</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing