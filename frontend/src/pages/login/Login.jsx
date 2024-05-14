import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
export default function Login() {
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const{loading,login}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await login(username,password)
  }
  return (
    <div className='flex justify-center items-center flex-col min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='flex items-center justify-center gap-4 text-3xl font-semibold text-gray-300'>
          LOGIN
          <span className='text-orange-600 '>ChatApp</span>
        </h1>
        <form action='' onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base text-gray-100'>
                Username
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter UserName'
              className='input input-bordered w-full max-w-xs'
              value={username}
              onChange={(e)=>setusername(e.target.value)}

            />
            <label className='label p-2'>
              <span className='label-text text-base text-gray-100'>
                Password
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter Password'
              className='input input-bordered w-full max-w-xs'
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <Link
            to='/signup'
            className='text-base mt-3  hover:underline text-gray-300 hover:text-red-700 flex items-center justify-center'
          >
            {"Don`t have an account?"}
          </Link>
          <div className='flex items-center justify-center'>
            <button className=' btn w-44 hover:text-gray-400 btn-neutral btn-sm mt-2 '
            disabled={loading}>
              Signup{" "}
            </button>
            {/* make laoding spinner */}
          </div>
        </form>
      </div>
    </div>
  );
}
