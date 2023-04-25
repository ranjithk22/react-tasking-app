import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

import { tasksList } from './database'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/TasksReducer'
import { useAuth, AuthProvider } from './auth/AuthProvider';

function App() {
  const fetchedData = useSelector(state => state.TasksReducer.tasksList)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const auth = useAuth()

  const loadTasksList = () => {
    dispatch(fetchTasks(tasksList))
  }

  // Get Login status for Local Storage
  let currentStatus = JSON.parse(sessionStorage.getItem('loginStatus'))

  useEffect(() => {
    if (!currentStatus) {
      sessionStorage.setItem('loginUser', JSON.stringify(''))
      sessionStorage.setItem('loginStatus', JSON.stringify(false))
    } else {
      auth.logIn(JSON.parse(sessionStorage.getItem('loginUser')))
    }

    loadTasksList()
  }, [])

  useEffect(() => {
    setData(fetchedData)
  }, [fetchedData])

  return (
    <AuthProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            {isLoggedIn ?
              <Route path='/' element={<Dashboard />} />
              :
              <Route path='/' element={<LoginPage />} />
            }
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
