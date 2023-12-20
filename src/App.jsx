import React, { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import User from './pages/User'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'

const App = () => {

  const [users, setUsers] = useState([])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User users={users} setUsers={setUsers} />} />
          <Route path='/adduser' element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path='/edituser/:id' element={<EditUser users={users} setUsers={setUsers} />} />
          <Route path='*' element={<h1>404 page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App