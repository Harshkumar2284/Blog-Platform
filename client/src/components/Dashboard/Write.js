import React, { useState, useEffect } from 'react'
import Fnavbar from '../Navbars/Fnavbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Write() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [tags, setTags] = useState("")
  const [tagArr, setTagArr] = useState([])
  const [tagmsg, setTagMsg] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    const check = async()=>{
      try {
        const response = await axios.get("/check", {withCredentials: true})
        
        if(response.status == 200){
          navigate("/")
        }
      } catch (error) {
        
      }
    }
    check()
  }
  )

  const handleTags = ()=>{
    if (!tags.length==0 & !tagArr.includes(tags.toLowerCase()) && tagArr.length<11) {
      const final = tags.toLowerCase()
      setTagArr([...tagArr, final  ])
    }
    
  }
  const handlePost = async () => {
    const article = {
      title: title,
      body: text,
      tags: tagArr
    }
    const response = await axios.post("/post", article, { withCredentials: true })
    const data = response.data
    if(response.status==200){
      navigate("/dashboard")
    }
    console.log(data.message)
  }
  return (
    <>
      <Fnavbar />
      <div className='flex flex-row'>
        <div className='flex justify-center items-center flex-col w-4/6 ml-40' style={{ height: "700px" }}>

          <textarea name="title" id="title" className=' w-full pt-2 text-3xl h-12 px-2 rounded-md mb-7 max-h-14' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
          <textarea name="title" id="title" className='w-full pt-2 text-lg text-zinc-600 h-4/6 px-2 rounded-md overflow-auto' placeholder='Tell your story...' value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <div className='mt-10'>
            <button className='text-xl rounded-xl px-2 py-1 ml-10 bg-blue-600 text-white hover:bg-white ' onClick={handlePost}>Submit</button>
            <button className='text-xl rounded-xl px-2 py-1 ml-10 bg-blue-600 text-white hover:bg-white '>Save as Draft</button>
          </div>
        </div>
        <div className='mt-20 ml-20 w-96 overflow-auto'>
          <p className='text-xl font-serif text-zinc-600 block'>Enter tags(max 10)</p>
          <input type="text" value={tags} className='border-2 border-zinc-500 rounded-md px-2 py-1' onChange={(e)=>setTags(e.target.value)}/>
          <button className='ml-5 border-2 border-zinc-700 rounded-2xl px-2 py-1 hover:bg-blue-900 hover:text-white transition-colors duration-300' onClick={handleTags}><span className='font-bold'>+</span> Add</button>
          <p className='h-5'>{tagmsg}</p>
          <p className='text-lg font-serif text-zinc-600 block'>Your Tags:</p>
          {
            tagArr.map((tag)=>{
              return(
                <div className=' border border-zinc-500 inline-block font-serif px-3 py-1 text-zinc-700 rounded-2xl mb-5 mr-5'>{tag}</div>
              )
            })
          }
        </div>
      </div>
    </>

  )
}
