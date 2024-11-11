import {useState} from 'react'
import axios from 'axios'
import Preference from './Preference'
import {useNavigate} from 'react-router-dom'

export default function Register(props) {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [user, setUser] = useState("")
    const [password, setPass] = useState("")
    const [msg, setmsg] = useState("")
    const [pref, setPref] = useState("hidden")
    const navigate = useNavigate()
    const handleFirst = (e)=>{
        setFirst(e.target.value)
    }
    const handleLast = (e)=>{
        setLast(e.target.value)
    }
    const handleUser = (e)=>{
        setUser(e.target.value)
    }
    const handlePass = (e)=>{
        setPass(e.target.value)
    }
    const handleRegister = async()=>{
        setmsg("")
        if(user.length<4){
            setmsg("Username must have at least 4 characters")
        }else if(password.length<8){
            setmsg("Password must have at least 8 characters")
        }else{
            const userData = {
                UserName: user,
                Passw: password,
                First_Name: first,
                Last_Name: last
            }
            try {
                const response = await axios.post("http://localhost:8080/register", userData,{
                    withCredentials: true
                })
                setmsg(response.data.message)
                if(response.status===201){
                    navigate('/dashboard')
                }
            } catch (error) {
                setmsg("There was some error on the server side")
            }
        }

    }
    return (
        <div>
            <form action="" method="post" className='mt-10'>
                <div>
                    <label htmlFor="First Name" className='block text-xl font-medium font-serif mb-2'>First Name<span className=' text-red-600 font-bold'>*</span>: </label>
                    <input type="text" className=' w-80 border rounded-lg p-1 border-black' required value={first} onChange={handleFirst}/>
                </div>
                <div className='mt-5'>
                    <label htmlFor="Last Name" className='block text-xl font-medium font-serif mb-2'>Last Name: </label>
                    <input type="text" className=' w-80 border rounded-lg p-1 border-black' value={last} onChange={handleLast}/>
                </div>
                <div className='mt-5'>
                    <label htmlFor="UserName" className='block text-xl font-medium font-serif mb-2'>Username<span className='text-red-600 font-bold'>*</span>: </label>
                    <input type="text" className=' w-80 border rounded-lg p-1 border-black' required value={user} onChange={handleUser}/>
                </div>
                <div className='mt-5 '>
                    <label htmlFor="Password" className='block text-xl font-medium font-serif mb-2'>Password<span className='text-red-600 font-bold'>*</span>: </label>
                    <input type='password' className='w-80 border rounded-lg p-1 border-black' required value={password} onChange={handlePass}/>
                </div>
                <div className='h-7 mt-5 text-red-600 font-semibold'>
                    <p>{msg}</p>
                </div>
                <input type="submit" className='border-2 border-black px-3 py-1 rounded-2xl mt-5 font-medium hover:bg-black hover:text-white transition-colors duration-300 ml-28' onClick={(e) => {
                    e.preventDefault()
                    handleRegister()
                }} />
            </form>
            <h1 className='mt-10 ml-10'>Already have an account? <button className='text-blue-500 hover:underline ' onClick={() => {
                props.setLogin(true)
            }}>Login here</button></h1>
            <Preference vis = {pref}/>
        </div>
    )
}
