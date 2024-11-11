import React from 'react'

export default function HomePic() {
    return (
        <div>

            <div className='border border-black w-screen flex justify-center  py-4' style={{background:"linear-gradient(to right, #F3C029, #F99D03)"}}>
                <p className='font-semibold'>Be part of better internet <span className='underline'>Get 20% off membership for a limited time</span></p>
            </div>
            <div className=' w-full rounded-xl flex flex-row border border-black justify-between' style={{ height: "550px" }}>
                <div className='mt-20 ml-20'>
                    <h1 className='text-9xl font-serif'>Human</h1>
                    <h1 className='text-8xl font-serif'>Stories and Ideas</h1>
                    <p className='text-2xl mt-10'>A place to read, write, and deepen your understanding</p>
                    <button className='border border-black bg-black text-white py-2 mt-10 w-60 text-xl rounded-3xl'>Start Reading</button>
                </div>
                <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" height="100" width="410" alt="" clas />
            </div>
            <div className='flex justify-center items-center' style={{height:"90px"}}>
            <div className=' list-none flex flex-row'>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Help</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Status</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>About</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Carrers</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Press</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Blog</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Privacy</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Terms</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Text to Speech</li>
                <li className='mr-5 text-sm font-semibold text-zinc-700 hover:underline'>Teams</li>
            </div>
            </div>
        </div>
    )
}
