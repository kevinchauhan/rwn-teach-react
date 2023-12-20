import React from 'react'
import Form from '../components/Form'

const AddUser = ({ setUsers, users }) => {
    return (
        <Form users={users} setUsers={setUsers} />
    )
}

export default AddUser