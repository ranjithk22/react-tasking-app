import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { users } from '../database/db'
import { useAuth } from '../auth/AuthProvider'

const LoginPage = () => {
    const auth = useAuth()
    const [loddedUsers, setLoddedUsers] = useState([])
    const [hideIt, setHideIt] = useState('')
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        setLoddedUsers(users)
    }, [])

    const onUsernameChange = (e) => {
        setUser((prevState) => ({ ...prevState, username: e.target.value }))
    }
    const onPasswordChange = (e) => {
        setUser((prevState) => ({ ...prevState, password: e.target.value }))
    }

    const onFormSumit = (e) => {
        e.preventDefault()
        const newUser = loddedUsers.find(item => {
            if (item.username === user.username && item.password === user.password) {
                console.log(item)
                return item
            }
        })

        if (newUser) {
            auth.logIn(user)
        } else {
            setHideIt(true)
        }
    }


    return (
        <div className='login-wrapper h-100-vh d-flex align-items-center justify-content-center'>
            <div>
                <div className='card p-4'>
                    <h3 className='mb-3 text-center'>Login</h3>
                    <form onSubmit={onFormSumit}>
                        <div className='mb-2'>
                            <label>Enter Username</label>
                            <input className='form-control mt-2' type="text" value={user.username} onChange={onUsernameChange} />
                        </div>
                        <div className='mb-3'>
                            <label>Password</label>
                            <input className='form-control mt-2' type="text" value={user.password} onChange={onPasswordChange} />
                        </div>
                        <div className='d-flex'>
                            <button type='submit' className='btn btn-primary m-auto'>Login</button>
                        </div>
                        {hideIt &&
                            <div className={`alert alert-danger mt-4 text-center hide-it ${hideIt && 'hide-it'}`} role="alert">
                                Credential are wrong
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage