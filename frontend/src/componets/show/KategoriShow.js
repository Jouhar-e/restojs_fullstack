import React, { useState, useEffect } from 'react'
import { Col, Button, Table, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Sidebar1 from './sidebarMenu/sidebar1'

export const KategoriShow = () => {

    const [data, setData] = useState([])
    const getDataFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        if (storedData === null) {
            return null; // Return null if data doesn't exist
        } else {
            try {
                return JSON.parse(storedData); // Parse JSON string if valid
            } catch (error) {
                console.error('Error parsing JSON data from local storage:', error);
                return null; // Return null if parsing fails
            }
        }
    };


    useEffect(() => {
        getData()
    }, [])

    const getLevel = getDataFromLocalStorage('level')
    console.log({ getLevel })

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/kategori?level=${getLevel}`)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDataByName = async (name) => {
        if (name === "") {
            getData()
        } else {
            try {
                const response = await axios.get(`http://localhost:5000/carikategori/${name}`)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const deleteData = async (id, nama) => {
        const dialog = window.confirm('Apakah ada ingin menghapus data ' + nama)

        if (dialog) {
            await axios.delete(`http://localhost:5000/kategori/${id}`)
            getData()
        } else {
            getData()
        }
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar1 />
                </div>
                <div className='col'>
                    <div className='row'>
                        <Col>
                            <Button href='/kategori/tambah'>Tambah Data</Button>
                        </Col>
                        <Col lg={3}>
                            <Form.Control onChange={(name) => getDataByName(name.target.value)} type="text" placeholder='Cari' />
                        </Col>
                    </div>
                    <Table className='mt-2'>
                        <thead className='text-center'>
                            <tr>
                                <th>No</th>
                                <th>Kategori</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={d.idkategori}>
                                    <td className='text-center'>{i + 1}</td>
                                    <td>{d.kategori}</td>
                                    <td className='text-center'>
                                        <Button variant='info' href={`/kategori/edit/${d.idkategori}`} size='sm' className='m-1'>Ubah</Button>
                                        <Button variant='danger' onClick={() => deleteData(d.idkategori, d.kategori)} size='sm' className='m-1'>Hapus</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
