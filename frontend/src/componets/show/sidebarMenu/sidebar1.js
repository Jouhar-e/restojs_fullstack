import { ListGroup } from 'react-bootstrap'


function Sidebar1() {

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

    const getLevel = getDataFromLocalStorage('level')

    return (
        <div>
            <ListGroup>
                {getLevel === 'Admin' ? (
                    <>
                        <ListGroup.Item action href='/pelanggan'>Pelanggan</ListGroup.Item>
                        <ListGroup.Item action href='/menu'>Menu</ListGroup.Item>
                        <ListGroup.Item action href='/kategori'>Kategori</ListGroup.Item>
                        <ListGroup.Item action href='/order'>Order</ListGroup.Item>
                        <ListGroup.Item action href='/order/details'>Order Detail</ListGroup.Item>
                        <ListGroup.Item action href='/user'>User</ListGroup.Item>
                    </>
                ) : getLevel === 'Koki' ? (
                    <>
                        <ListGroup.Item action href='/menu'>Menu</ListGroup.Item>
                        <ListGroup.Item action href='/kategori'>Kategori</ListGroup.Item>

                    </>
                ) : getLevel === 'Kasir' ? (
                    <>
                        <ListGroup.Item action href='/order'>Order</ListGroup.Item>
                        <ListGroup.Item action href='/order/details'>Order Detail</ListGroup.Item>

                    </>
                ): null}
            </ListGroup>
        </div>
    )
}

export default Sidebar1