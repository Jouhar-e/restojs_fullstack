import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar1 from './show/sidebarMenu/sidebar1'

export const UserMenu = () => {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar1 />
                </div>
                <div className='col-md-10'>
                    <h3>Hallo</h3>
                </div>
            </div>
        </div>
    )
}
