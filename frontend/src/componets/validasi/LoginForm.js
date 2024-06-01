import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const simpanLevel = (data) => {
    localStorage.setItem('level', JSON.stringify(data));
  };

  const acLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:5000/user/login`, {
        email,
        password
      })
      simpanLevel(response.data.level)
      navigate('/userMenu')
    } catch (error) {
      console.log(error)
    }
    // console.log({ email, password })
  }

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
      <div className='w-25'>
        <form onSubmit={acLogin}>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' className='form-control' onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' className='form-control' onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className='mt-2'>
            <input type="submit" name="Login" className='btn btn-primary' id="" />
          </div>
        </form>
      </div>
    </div>
  )
}
