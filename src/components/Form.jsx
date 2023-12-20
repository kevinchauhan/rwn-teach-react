import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = ({ setUsers, users, isEdit }) => {
    const { id } = useParams()

    const [input, setInput] = useState({ name: '', email: '' })
    const navigate = useNavigate()

    useEffect(() => {
        if (isEdit) {
            setInput(users[id])
        }
    }, [])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEdit) {
            const temp = [...users]
            temp[id] = input
            setUsers(temp)
        } else {
            setUsers([...users, input])
        }
        navigate(-1)
    }

    return (
        <div className='w-1/2 mx-auto text-center'>
            <form action="" onSubmit={handleSubmit}>
                <div className='my-4'>
                    <input type="text" name="name" id="" className='px-2 py-1' value={input.name} onChange={handleChange} placeholder='name' />
                </div>
                <div className='my-4'>
                    <input type="text" name="email" id="" className='px-2 py-1' value={input.email} onChange={handleChange} placeholder='email' />
                </div>
                <button className='bg-lime-500 py-1 px-3'>{isEdit ? 'Update' : 'Add'}</button>
            </form>
        </div>
    )
}

export default Form