import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../firebase";

const Orders = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        try {
          const ordersSnapshot = await db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created", "desc")
            .get();

          const fetchedOrders = ordersSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setOrders(fetchedOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      fetchOrders();
    }
  }, [user]);

  return (
    <div className="orders">
      <h1 className="order_title">Your Orders</h1>
      <div className="order_container">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="order">
              <div className="order_id">
                <h2>Order:</h2>
                <h5>{order.id}</h5>
              </div>
              <h3>Date: {new Date(order.created * 1000).toLocaleString()}</h3>
              <div className="order_items">
                {order.basket.map((item, index) => (
                  <div key={index} className="order_item">
                    <img key={index} src={item.image} alt={item.title} />
                    <div class="order_details">
                      <h3>{item.title}</h3>
                      <h4>Price: R{item.price}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <p className="order_total">
                Order Total: R{(order.amount / 100).toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
