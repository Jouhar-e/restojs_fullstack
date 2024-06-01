import React, { useState, useEffect } from 'react'
import { Button,Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const EditKategori = () => {

    const [kategori, setKategori] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getDataById()
    }, [])

    const saveData = async (e) => {
        e.preventDefault();
        if (kategori === "") {
            alert("Data masih kosong")
        } else {
            try {
                await axios.patch(`http://localhost:5000/kategori/${id}`, {
                    kategori
                })
                navigate('/kategori')
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getDataById = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/kategori/${id}`)
            setKategori(response.data.kategori)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Form onSubmit={saveData}>
                <Form.Group>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Control value={kategori} onChange={(e) => setKategori(e.target.value)} type='text' placeholder='Katetgori' />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' className='mt-3'>Simpan</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
