import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Login(props) {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [msg, setmsg] = useState("")
  const handleUser = (e) => setUser(e.target.value)
  const handlePass = (e) => setPass(e.target.value)
  const navigate = useNavigate()
  const handleLogin = async (req, res) => {
    try {
      const userData = {
        UserName: user,
        Passw: pass
      }
      const response = await axios.post("http://localhost:8080/login", userData,{
        withCredentials:true
      })
      setmsg(response.data.message)
      if(response.status===201){
        navigate('/dashboard')
      }
    } catch (error) {

    }
  }
  return (
    <div>
      <form action="" method="post" className='mt-24'>
        <div>
          <label htmlFor="Username" className='block text-xl font-medium font-serif mb-2'>Username: </label>
          <input type="text" className=' w-80 border rounded-lg p-1 border-black' required value={user} onChange={handleUser} />
        </div>
        <div className='mt-10 '>
          <label htmlFor="Password" className='block text-xl font-medium font-serif mb-2'>Password: </label>
          <input type='password' className='w-80 border rounded-lg p-1 border-black' required value={pass} onChange={handlePass} />
        </div>
        <div className='h-7 mt-5 text-red-600 font-semibold'>
          <p>{msg}</p>
        </div>
        <input type='submit' className='border-2 border-black px-3 py-1 rounded-2xl mt-14 font-medium hover:bg-black hover:text-white transition-colors duration-300 ml-28' onClick={(e) => {
          e.preventDefault()
          handleLogin()
        }} />
      </form>
      <h1 className='mt-10 ml-10'>Don't have an account? <button className='text-blue-500 hover:underline' onClick={() => {
        props.setLogin(false)
      }}>Sign Up here</button></h1>
    </div>
  )
}
