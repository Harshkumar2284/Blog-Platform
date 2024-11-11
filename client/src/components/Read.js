import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Fnavbar from './Navbars/Fnavbar'

export default function Read() {
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [liked, setLiked] = useState(false)
    useEffect(() => {
        const getArticle = async () => {
            const art = await axios.post("/getArticle", { id }, { withCredentials: true })
            setArticle(art.data)
            
        }
        getArticle()
    }, [])
    if (!article) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Fnavbar />
            <div className='mt-20 ml-20'>
                <div className='flex flex-row '>
                    <p className='text-zinc-700 text-3xl font-sans font-bold tracking-tighter' >{article.title}</p>
                    <button className='ml-10 mt-2'><img src="https://th.bing.com/th/id/OIP.qyjjdgsH1Ti4sYHtVBT1-AHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="50" alt="" style={{marginTop:"-18px"}}/></button>
                </div>

                <p className='tracking-tighter font-serif text-zinc-600'>Written by <span className='hover:underline hover:text-blue-600 hover:font-semibold hover:cursor-pointer'>{article.author}</span></p>
                <div className='w-4/5 h-fit  mt-10 py-10'>
                    <p className='text-zinc-800 text-lg font-serif'>{article.body}</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-3xl'>Comments</h1>
                    <div className='border border-zinc-300 h-40 w-4/5 mt-10 mb-10'>
                        <input type="text" name="" id="" placeholder='Post a comment' className='border border-zinc-900 w-3/5 mt-10 px-2 py-1 rounded-md block mb-5'/>
                        <button className='border border-black rounded-2xl text-xl mb-10 w-40 hover:bg-black hover:text-white transition-colors duration-300    '>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
