import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e) {
    e.preventDefault();
    await axios.post('/register', {
      first,
      last,
      email,
      password,
    })
  }
  
  return (
    <div className='mt8 grow flex items-center justify-around'>
      <div className="mb-32">
        <h1 className="text-3xl text-center mb-16"> Sign up</h1>
        <form className='max-w-md  mx-auto' onSubmit={registerUser}>
          <input type="text" className="name" placeholder='First Name'
          value={first} onChange={e =>setFirst(e.target.value)}/>
          <input type="text" className="lastName" placeholder='Last Name'
          value={last} onChange={e =>setLast(e.target.value)}/>
          <input type="email" className="email" placeholder='Email'
          value={email} onChange={e =>setEmail(e.target.value)}/>
          <input type="password" className="password" placeholder='password' 
          value={password} onChange={e =>setPassword(e.target.value)}/>
          <button className='primary'>Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link to={'/login'} className='text-black'> Login </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage