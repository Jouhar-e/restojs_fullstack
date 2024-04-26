import React, { useState } from 'react'
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddUser = () => {
    const [user, setUser] = useState("")
    const [alamat, setAlamat] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ulangPassword, setUlangPassword] = useState("")
    const [level, setLevel] = useState("Admin")
    const navigate = useNavigate()

    const saveData = async (e) => {
        let status = 1
        e.preventDefault();
        if (password === ulangPassword) {
            try {
                await axios.post(`http://localhost:5000/user`, {
                    user,
                    alamat,
                    email,
                    password,
                    level,
                    status
                })
                navigate('/user')
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Password Tidak Sama")
        }
    }


    return (
        <div>
            <Form onSubmit={saveData}>
                <Form.Group>
                    <Form.Label>User</Form.Label>
                    <Form.Control value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='User' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control value={alamat} onChange={(e) => setAlamat(e.target.value)} type='text' placeholder='Alamat' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Select value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Admin">Admin</option>
                        <option value="Koki">Koki</option>
                        <option value="Admin">Kasir</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ulangi Password</Form.Label>
                    <Form.Control value={ulangPassword} onChange={(e) => setUlangPassword(e.target.value)} type='text' placeholder='Ulangi Password' required />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' className='mt-3'>Registrasi</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
