import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ users, setUsers }) => {

    const handleDelete = (id) => {
        const temp = [...users]
        temp.splice(id, 1)
        setUsers(temp)
    }

    return (
        <>
            <div className='w-1/2  mx-auto'>
                <h1 className='flex justify-between mt-5'>User List <Link to={'/adduser'} className='bg-lime-500 px-2'>Add</Link></h1>
                <table className='w-full mt-5'>
                    <thead>
                        <tr>
                            <th className='border bg-gray-600'>Name</th>
                            <th className='border bg-gray-600'>Email</th>
                            <th colSpan={2} className='border bg-gray-600'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, id) => {
                                return <tr key={id}>
                                    <td className='border text-center'>{user.name}</td>
                                    <td className='border text-center'>{user.email}</td>
                                    <td className='border text-center'>
                                        <Link to={`/edituser/${id}`}>📝</Link>
                                    </td>
                                    <td className='border text-center'><button onClick={() => handleDelete(id)}>❌</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User