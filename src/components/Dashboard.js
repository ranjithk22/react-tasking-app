import React from 'react'
import Sidebar from './Sidebar';

function Dashboard() {
    const date = new Date()
    const day = date.getDate();
    console.log(day)
    return (
        <div className='content d-flex'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="tasks-content">
            <h3>Tasklist</h3>
            </div>
        </div>
    )
}

export default Dashboard