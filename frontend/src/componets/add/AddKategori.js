import React, { useState } from 'react'
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddKategori = () => {
    const [kategori, setKategori] = useState("")
    const navigate = useNavigate()

    const saveData = async (e) => {
        e.preventDefault();
        if (kategori === "") {
            alert("Data masih kosong")
        } else {
            try {
                await axios.post(`http://localhost:5000/kategori`, {
                    kategori
                })
                navigate('/kategori')
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <div>
            <Form onSubmit={saveData}>
                <Form.Group>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Control value={kategori} onChange={(e) => setKategori(e.target.value)} type='text' placeholder='Kategori' />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' className='mt-3'>Simpan</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
