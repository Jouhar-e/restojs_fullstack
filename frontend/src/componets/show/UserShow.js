import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ListGroup, Table, Form } from 'react-bootstrap'
import axios from 'axios'

export const UserShow = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/user`)
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
                const response = await axios.get(`http://localhost:5000/cariuser/${name}`)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const deleteData = async (id, nama) => {
        const dialog = window.confirm('Apakah ada ingin menghapus data ' + nama)

        if (dialog) {
            await axios.delete(`http://localhost:5000/user/${id}`)
            getData()
        } else {
            getData()
        }
    }

    const setStatusId = async (id, nama, status) => {
        const dialog = window.confirm('Apakah ada ingin merubah data ' + nama)

        if (status === 1) {
            status = 0
            if (dialog) {
                await axios.patch(`http://localhost:5000/userstatus/${id}`, {
                    status
                })
                getData()
            } else {
                getData()
            }
        } else {
            status = 1
            if (dialog) {
                await axios.patch(`http://localhost:5000/userstatus/${id}`, {
                    status
                })
                getData()
            } else {
                getData()
            }
        }
        // console.log(status)
    }

    return (
        <div>
            <Table>
                <thead className='text-center'>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Alamat</th>
                        <th>Email</th>
                        <th>Level</th>
                        <th>Aksi</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={d.iduser}>
                            <td className='text-center'>{i + 1}</td>
                            <td>{d.user}</td>
                            <td>{d.alamat}</td>
                            <td>{d.email}</td>
                            <td>{d.level}</td>
                            <td className='text-center'>
                                <Button variant='danger' onClick={() => deleteData(d.iduser, d.user)} size='sm' className='m-1'>Hapus</Button>
                            </td>
                            <td className='text-center'>
                                <Button variant='warning' onClick={() => setStatusId(d.iduser, d.user, d.status)} size='sm' className='m-1'>{d.status === 0 ? 'Nonaktif' : 'Aktif'}</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

}
