import React, { useState } from 'react'
import axios from 'axios'

export default function Preference(props) {
  const [pref, setPref] = useState([])
  const addPref = (e)=>{
    const value = e.target.value
    if (!pref.includes(value)) {
      setPref([...pref, value])
    }
  }
  const removePref = (e)=>{
    const value = e.target.key
    setPref((prevPref)=>prevPref.filter((item)=>item!==value))
  }
  const handlePreference = async()=>{
    const response = await axios.put("/pref",pref)
    if (response.data.status===200) {
      console.log("dones")
    }
  }
  return (
    <div className={` bg-white w-screen h-screen fixed z-20 ${props.vis} top-0 left-0 flex justify-center items-center`}>
            <div className='border-2 border-zinc-500 h-4/5 w-2/5 rounded-3xl relative pt-14 px-10'>
              <h1 className=' text-2xl font-serif'>Choose at least 3 preferences</h1>
              <div className=' mt-16'>
                <button className='border-2 border-black rounded-3xl px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' value="Technology" onClick={addPref}>Technology</button>
                <button className='border-2 border-black rounded-3xl px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' value="Sports" onClick={addPref}>Sports</button>
                <button className='border-2 border-black rounded-3xl px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' value="Space" onClick={addPref}>Space</button>
                <button className='border-2 border-black rounded-3xl px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' value="Gaming" onClick={addPref}>Gaming</button>
                <button className='border-2 border-black rounded-3xl px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' value="Politics" onClick={addPref}>Politics</button>
                <button className='border-2 border-black rounded-3xl px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' value="f" onClick={addPref}></button>
              </div>
              <div>
                <h1 className='mb-5'>Your Selected Preferences:</h1>
                {
                  Array.isArray(pref) && pref.map((name)=>{
                    console.log(pref)
                    return(
                      <div className='border-2 inline border-black rounded-3xl mb-3 px-3 py-1 mr-6 font-serif hover:bg-slate-200 mb-5 transition-all duration-300 text-lg' onClick={removePref} key={name}>{name} <button className=''>x</button></div>
                    )
                  })
                }
              </div>
              <button className='bottom-2' onClick={handlePreference}>Submit</button>
            </div>
    </div>
  )
}
