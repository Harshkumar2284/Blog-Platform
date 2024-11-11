import { React, useEffect, useState } from 'react'
import Fnavbar from '../Navbars/Fnavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Dashboard() {
  const navigate = useNavigate()
  const [topart, settopart] = useState([])
  const [toptags, settags] = useState([])
  const [search, setsearch] = useState("popular")
  useEffect(() => {
    const check = async () => {
      try {

        const response = await axios.get("/check", { withCredentials: true })
        if (response.status == 200) {
          navigate("/")
        }
      } catch (error) {

      }
    }
    check()
    const top = async () => {
      const articles = await axios.get("/topArticles", { withCredentials: true })
      console.log(articles.data)
      settopart(articles.data)
    }
    top()
    const topTags = async () => {
      const response = await axios("/getTags")
      settags(response.data)
    }
    topTags()
  }, []
  )
  return (
    <div>
      <Fnavbar />
      <div className='flex flex-row justify-center'>
        <div className='mt-20 ml-20'>
          <list className="list-none flex flex-row mb-10">
            <li className='mr-10 font-serif text-zinc-700 hover:underline hover:cursor-pointer font-light'>Popular</li>
            <li className='mr-10 font-serif text-zinc-700 hover:underline hover:cursor-pointer font-light'>For you</li>
            <li className='mr-10 font-serif text-zinc-700 hover:underline hover:cursor-pointer font-light'>Favourites</li>
          </list>
          {
            topart.map((article) => {
              return (
                <div key={article._id} className='h-24 rounded-xl mb-5 text-zinc-800 px-5 py-2' style={{width:"500px"}}>
                  <p className='font-extrabold font-sans text-2xl tracking-wide hover:underline' onClick={() => { navigate(`/read/${article._id}`) }}>{article.title}</p>
                  <p className='text-sm'>Written by <span className = 'text-blue-700 font-semibold hover:underline hover:cursor-pointer'>{article.author}</span></p>
                  <p className='text-sm'>{article.likeNum} Approvals</p>
                </div>
              )
            })
          }
        </div>
        <div className='mt-24 mr-20 w-96 h-60 rounded-md p-5 ml-20' >
          <p className='text-2xl text-black opacity-100 font-bold tracking-tighter mb-5'>Popular Tags</p>
          {
            toptags.map((tag)=>{
              return(
                <div className='inline-block w-fit text-black bg-black px-2 py-1 mr-4 rounded-xl  mt-2'>
                  <p className='inline font-semibold tracking-tighter text-white'>{tag.tag}</p>
                </div>
              )
            })
          }
          <div className='border border-cyan-600 w-96 h-72 mt-20 bg-cyan-600 rounded-xl opacity-70 '>
            <h1 className='text-white text-4xl font-bold mt-10 block text-center mb-10'>Welcome new user</h1>
            <button className='border-2 border-black text-xl text-white font-bold ml-20 mt-10 px-2 py-1 rounded-xl bg-black opacity-100'>Start Writing Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
