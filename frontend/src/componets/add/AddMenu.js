import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddMenu = () => {
    const [data, setData] = useState([])
    const [menu, setMenu] = useState("")
    const [idkategori, setIdKategori] = useState("")
    const [gambar, setGambar] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [harga, setHarga] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response1 = await axios.get(`http://localhost:5000/kategori`)
            const response2 = await axios.get(`http://localhost:5000/kategori/one`)
            setData(response1.data)
            setIdKategori(response2.data.idkategori)
        } catch (error) {
            console.log(error)
        }
    }

    const saveData = async (e) => {
        e.preventDefault();
        if (menu === "" || idkategori === 0 || gambar === "" || deskripsi === "" || harga === "") {
            alert("Data masih kosong")
        } else {
            try {
                await axios.post(`http://localhost:5000/menu`, {
                    menu,
                    idkategori,
                    gambar,
                    deskripsi,
                    harga
                })
                navigate('/menu')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <Form onSubmit={saveData}>
                <Form.Group>
                    <Form.Label>Menu</Form.Label>
                    <Form.Control value={menu} onChange={(e) => setMenu(e.target.value)} type='text' placeholder='Menu' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select value={idkategori} onChange={(e) => setIdKategori(e.target.value)} id="">
                        {data.map((d) => (
                            <option value={d.idkategori}>{d.kategori}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gambar</Form.Label>
                    <Form.Control value={gambar} onChange={(e) => setGambar(e.target.value)} type='file' placeholder='Gambar' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} type='text' placeholder='Deskripsi' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Harga</Form.Label>
                    <Form.Control value={harga} onChange={(e) => setHarga(e.target.value)} type='number' placeholder='Harga' />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' className='mt-3'>Simpan</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
