import {useState} from 'react';
import Login from './Login';
import Register from './Register';


export default function AuthModal(props) {
    const [login, setLogin] = useState(true)
    return (
        <div className={`z-10 h-screen w-full bg-white absolute mt-0 ${props.vis} flex justify-center items-center`}>
            <div className='border-2 border-zinc-300 shadow-neutral-700 shadow-lg rounded-3xl w-2/6 h-5/6 p-20 flex justify-center items-start flex-col relative'>
                <button className='self-end absolute top-2 right-8 text-2xl text-gray-500 hover:text-gray-800 transition-colors' onClick={() => {
                    props.setmodal('hidden')
                }}>x</button>
                {
                    login?<h1 className='text-4xl font-serif text-black font-thin tracking-tighter absolute top-20 ml-14'>Welcome Back.</h1>:null
                }
                {
                    login? <Login setLogin = {setLogin}/> : <Register setLogin = {setLogin} modal = {props.setmodal}/>
                }
            </div>
        </div>
    );
}