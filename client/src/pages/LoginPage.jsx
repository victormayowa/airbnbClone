import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='mt-8 grow flex items-center justify-around'>
      <div className="mb-32">
        <h1 className="text-3xl text-center mb-16"> Login Page</h1>
        <form className='max-w-md  mx-auto' action="">
          <input 
          type="text" 
          className="email" 
          placeholder='your@email.com'/>
          <input 
          type="password" 
          className="password"
          placeholder='password' 
          />
          <button className='primary'>Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className='text-black' to={'/register'}>Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
