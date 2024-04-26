import React, { useState } from 'react'
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddPelanggan = () => {
    const [pelanggan, setPelanggan] = useState("")
    const [jeniskelamin, setJK] = useState("L")
    const [alamat, setAlamat] = useState("")
    const [telp, setTelp] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ulangPassword, setUlangPassword] = useState("")
    const navigate = useNavigate()

    const saveData = async (e) => {
        let status = 1
        e.preventDefault();
        if (password === ulangPassword) {
            try {
                await axios.post(`http://localhost:5000/pelanggan`, {
                    pelanggan,
                    jeniskelamin,
                    alamat,
                    telp,
                    email,
                    password,
                    status
                })
                navigate('/login')
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
                    <Form.Label>Pelanggan</Form.Label>
                    <Form.Control value={pelanggan} onChange={(e) => setPelanggan(e.target.value)} type='text' placeholder='Pelanggan' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Select value={jeniskelamin} onChange={(e) => setJK(e.target.value)}>
                        <option value="L">L</option>
                        <option value="P">P</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control value={alamat} onChange={(e) => setAlamat(e.target.value)} type='text' placeholder='Alamat' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telp</Form.Label>
                    <Form.Control value={telp} onChange={(e) => setTelp(e.target.value)} type='text' placeholder='Telp' required />
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
