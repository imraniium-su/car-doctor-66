import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://car-doctor-server-66.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('carDoctor-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json();
            })
            .then(data => setOrder(data))
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://car-doctor-server-66.vercel.app/orders/${id}`, {
                method: 'DELETE',

                headers: {
                    authorization: `Bearer ${localStorage.getItem('carDoctor-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = orders.filter(odr => odr._id === id);
                        setOrder(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://car-doctor-server-66.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('carDoctor-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'
                    const NewOrders = [approving, ...remaining];
                    setOrder(NewOrders);
                }
            })
    }

    return (
        <div>
            <h2>You have : {orders.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrderRow key={order._id} order={order}
                                handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;