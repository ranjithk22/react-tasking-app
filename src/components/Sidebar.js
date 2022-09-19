import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Sidebar() {
    const fetchedData = useSelector(state => state.TasksReducer.tasksList)
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(fetchedData)
    }, [fetchedData])

    console.log(data)

    return (
        <div>
            <ul className='mt-4'>
                {
                    data && data.categories.map(ele => {
                        return (
                            <li key={ele.id}>{ele.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar