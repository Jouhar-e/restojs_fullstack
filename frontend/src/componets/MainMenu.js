import React, { useState, useEffect } from 'react'
import { Col, Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import gambar from '../assets/gambar/rujak.jpg'
import { useParams } from 'react-router-dom'
import { MainSide } from './show/sidebarMenu/MainSide'

export const MainMenu = () => {

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        try {
            if (id === undefined) {
                const response = await axios.get('http://localhost:5000/menu')
                setData(response.data)
            } else {
                const response = await axios.get(`http://localhost:5000/menukategori/${id}`)
                setData(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getDataByName = async (name) => {
        if (name === "") {
            getData()
        } else {
            const response = await axios.get(`http://localhost:5000/carimenu/${name}`)
            setData(response.data)
        }
    }

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-2">
                    <MainSide />
                </div>
                <div className="col-md-10">
                    <Col lg={3}>
                        <Form>
                            <Form.Control onChange={(name) => getDataByName(name.target.value)} type='text' placeholder='Cari' className='ms-2 mb-2' />
                        </Form>
                    </Col>
                    <div className='d-flex'>
                        {data.map((d, i) => (
                            <Card style={{ width: '18rem' }} className='ms-2' key={i}>
                                <Card.Img variant="top" src={gambar} />
                                {/* {console.log(`../assets/gambar/`+d.gambar)} */}
                                <Card.Body>
                                    <Card.Title>{d.menu}</Card.Title>
                                    <Card.Text>Rp.{d.harga}</Card.Text>
                                    <Card.Text>{d.deskripsi}</Card.Text>
                                    <Button variant="primary">Beli  </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
