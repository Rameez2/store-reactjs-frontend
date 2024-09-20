import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrders } from '../services/ordersApi';

export default function OrderDetailsPage() {
  const { id } = useParams(); // Get the order ID from the URL
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const orders = await getOrders();
        const orderDetails = orders.find(order => order._id === id);
        setOrder(orderDetails);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    }
    fetchOrder();
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Order Details</h1>
      <p><strong>Order ID:</strong> {order._id}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
      <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
      <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      <h2>Products</h2>
      <ul>
        {order.productIds.map((productId, index) => (
          <li key={productId}>
            Product ID: {productId}, Quantity: {order.quantities[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
