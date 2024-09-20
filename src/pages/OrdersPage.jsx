import React, { useState, useEffect } from 'react';
import { getOrders } from '../services/ordersApi';
import { Link } from 'react-router-dom';

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from local storage or an API
        const fetchOrders = async () => {
            try {
                // Example for local storage:
                const fetchedOrders = await getOrders();
                  console.log(fetchedOrders);
                  setOrders(fetchedOrders);

            } catch (error) {
                console.log(error);
                
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Orders Page</h1>
            {orders.length === 0 ? (
                <p>No orders found</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order._id}>
                            <h2>Order ID: {order._id}</h2>
                            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p>Total: ${order.totalAmount}</p>
                            <p>Status: {order.status}</p>
                            <button><Link to={`/orders/${order._id}`}>more details</Link></button>
                            {/* Optionally, add a link or button to view more details */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
