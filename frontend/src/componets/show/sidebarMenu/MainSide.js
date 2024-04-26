import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'


export const MainSide = () => {

    const [kategoris, setKategori] = useState([])

    useEffect(() => {
        getKategori()
    }, [])

    const getKategori = async () => {
        try {
            const response = await axios.get('http://localhost:5000/kategori')

            setKategori(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>Kategori : </h3>
            <ListGroup className='mt-3'>
                {kategoris.map((kategori, i) => (
                    <ListGroup.Item key={i} href={`/${kategori.idkategori}`} action>{kategori.kategori}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
