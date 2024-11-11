import React from 'react'
import {useState} from 'react'
import AuthModal from '../Account/AuthModal'

export default function Navbar() {
    const [modal,setmodal] = useState('hidden')
    return (
        <nav className = ' bg-pink-50 flex justify-around pb-5'>
            <h1 className = ' font-bold text-4xl mt-5 font-serif tracking-tighter cursor-pointer'>Medium</h1>
            <div className = 'flex ml-20 mt-5'>
                <list className = 'flex'>
                    <button className = 'ml-10 font-medium ' onClick={()=>{
                        setmodal('block')
                    }}>Write</button>
                    <button className = 'ml-10 font-medium ' onClick={()=>{
                        setmodal('block')
                    }}>Sign In</button>
                    <button className = 'ml-10 font-medium border-2 p-2 border-black rounded-3xl bg-black text-white' onClick={()=>{
                        setmodal('block')
                    }}>Get Started</button>
                </list>
            </div>
            <AuthModal vis={modal} setmodal = {setmodal}/>
        </nav>
    )
}
