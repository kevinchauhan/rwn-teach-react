import React from 'react'
import Form from '../components/Form'

const EditUser = ({ setUsers, users }) => {
    return (
        <Form users={users} setUsers={setUsers} isEdit={true} />
    )
}

export default EditUser