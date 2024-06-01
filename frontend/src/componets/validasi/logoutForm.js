import React from 'react'
import { useNavigate } from 'react-router-dom'

export const logoutForm = () => {
    const navigate = useNavigate()
    const getLogout = async () =>{
        localStorage.removeItem('level')
        navigate('/login')
    }
  return (
    getLogout()
  )
}
