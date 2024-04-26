import { ListGroup } from 'react-bootstrap'


function Sidebar1() {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item action href='/pelanggan'>Pelanggan</ListGroup.Item>
                <ListGroup.Item action href='/menu'>Menu</ListGroup.Item>
                <ListGroup.Item action href='/kategori'>Kategori</ListGroup.Item>
                <ListGroup.Item action href='/order'>Order</ListGroup.Item>
                <ListGroup.Item action href='/order/details'>Order Detail</ListGroup.Item>
                <ListGroup.Item action href='/user'>User</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Sidebar1