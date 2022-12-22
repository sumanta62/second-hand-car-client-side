import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const [deleteUser, setDeleteUser] = useState([]);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://handler-car-server-sumanta62.vercel.app/users`);
            const data = await res.json();
            return data

        }
    })

    const handlerMakeAdmin = id =>{
        console.log(id);
        fetch(`https://handler-car-server-sumanta62.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authoraization: `bearer ${localStorage.getItem('assessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast.success('Make admin successfully')
                    refetch();
                }
            })
    }

    

    const handlerDeleteUsers = id => {
        const proseed = window.confirm('Are you sure , you went to cancel this .User');
        if (proseed) {
            fetch(`https://handler-car-server-sumanta62.vercel.app/users/admin/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete successfully')
                        const remaining = deleteUser.filter(ord => ord._id !== id);
                        setDeleteUser(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <div className='mt-10 mb-5 text-center text-white'>
                <h3 className="text-2xl md:text-3xl font-bold ">All Users</h3>
                <p>Here you can see all users</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>users</th>
                            <th>Admin</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.users}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handlerMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                                    <td><button  className="btn btn-xs btn-success">Verify </button></td>
                                    <td><button onClick={() =>handlerDeleteUsers(user._id)} className="btn btn-xs btn-danger">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;