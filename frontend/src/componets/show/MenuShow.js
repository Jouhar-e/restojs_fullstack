import React, { useState, useEffect } from 'react'
import { Col, Button, Table, Form, Image } from 'react-bootstrap'
import axios from 'axios'
import gambar from '../../assets/gambar/teh.jpg'
import Sidebar1 from './sidebarMenu/sidebar1'

export const MenuShow = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/menu`)
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
                const response = await axios.get(`http://localhost:5000/carimenu/${name}`)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const deleteData = async (id, nama) => {
        const dialog = window.confirm('Apakah ada ingin menghapus data ' + nama)

        if (dialog) {
            await axios.delete(`http://localhost:5000/menu/${id}`)
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
                            <Button href='/menu/tambah'>Tambah Data</Button>
                        </Col>
                        <Col lg={3}>
                            <Form.Control onChange={(name) => getDataByName(name.target.value)} type="text" placeholder='Cari' />
                        </Col>
                    </div>
                    <Table className='mt-2'>
                        <thead className='text-center'>
                            <tr>
                                <th>No</th>
                                <th>Menu</th>
                                <th>Deskripsi</th>
                                <th>Gambar</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={d.idmenu}>
                                    <td className='text-center'>{i + 1}</td>
                                    <td>{d.menu}</td>
                                    <td>{d.deskripsi}</td>
                                    <td className='text-center'>
                                        <Image src={gambar} alt="" rounded width={90} />
                                    </td>
                                    <td>Rp.{d.harga}</td>
                                    <td className='text-center'>
                                        <Button variant='info' href={`/menu/edit/${d.idmenu}`} size='sm' className='m-1'>Ubah</Button>
                                        <Button variant='danger' onClick={() => deleteData(d.idmenu, d.menu)} size='sm' className='m-1'>Hapus</Button>
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
