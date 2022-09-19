import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import { tasksList } from './database'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/TasksReducer'

function App() {
  const fetchedData = useSelector(state => state.TasksReducer.tasksList)
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  
  const loadTasksList = () => {
    dispatch(fetchTasks(tasksList))
  }

  useEffect(() => {
    loadTasksList()
  },[])

  useEffect(()=> {
    setData(fetchedData)
  }, [fetchedData])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          { data && data.isLoggedIn ?
            <Route path='/' element={<Dashboard />} />
            :
            <Route path='/' element={<Login />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
