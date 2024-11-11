import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Fnavbar() {
    const navigate = useNavigate()
  return (
    <nav className = ' bg-pink-50 flex justify-around pb-5'>
            <div className='mt-5'>
                <h1 className = ' font-bold text-4xl mt-5 font-serif tracking-tighter cursor-pointer inline'>Medium</h1>
                <input type="text" name="" id="" className=' bg-zinc-100 px-2 rounded-xl border-2 border-zinc-300 ml-20 w-92' placeholder='Search'/>
            </div> 
            <div className = 'flex ml-20 mt-5'>
                <list className = 'flex'>
                    <button className = 'ml-10 font-medium ' onClick={()=>{
                        navigate('/write')
                    }}>Write</button>
                    <button className = 'ml-10 font-medium border-2 p-2 border-black rounded-3xl bg-black text-white' >Logout</button>
                </list>
            </div>
            
        </nav>
  )
}
