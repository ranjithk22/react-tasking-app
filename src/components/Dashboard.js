import React, {useState, useEffect} from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux'

function Dashboard() {
    // const date = new Date()
    // const day = date.getDate();
    // console.log(day)    

    const [data, setData] = useState(useSelector(state => state.TasksReducer.tasksList.categories))
    const [currentCategory, setCurrentCategory] = useState({})
    const [currentList,setCurrentList] = useState(null)

console.log(data)

    useEffect(() => {
        // loadInboxData()
        const content = { ...data.filter(el => el.name === 'inbox') }
        setCurrentCategory(content)
    }, [data])
    
    useEffect(() => {
        const data = { ...currentCategory[0] }
        const items = data.items
        setCurrentList(items)
    }, [currentCategory])


    return (
        <>
            <Header />
            <div className='content d-flex'>
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="tasks-content">
                    <h4>Tasklist</h4>
                    <ul>
                    {
                        currentList && currentList.map(item => {
                            return (
                                <li key={item.id}>
                                    <div className='title'>{item.title}</div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard