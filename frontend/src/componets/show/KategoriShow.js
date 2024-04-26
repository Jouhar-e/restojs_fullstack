import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ListGroup, Table, Form } from 'react-bootstrap'
import axios from 'axios'
import Sidebar1 from './sidebarMenu/sidebar1'

export const KategoriShow = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/kategori`)
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
        <div>

            <Table>
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
    )
}
