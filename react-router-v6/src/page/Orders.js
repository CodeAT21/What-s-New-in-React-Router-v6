import React from 'react'
import { Link  } from "react-router-dom"

const Orders = () => {  
const orderIds = ["10001", "10002", "10003"]
  return (<>
    <h2>Orders</h2>
    <ul className="orders">
      {/* Loop through the orders array and display link to order details */}
      {orderIds.map(orderId => {
        return (
          <li key={orderId}>
            <Link to={`/admin/order_details/${orderId}`}>
              View Order {orderId}
            </Link>
          </li>
        )
      })}
    </ul>
  </>
  )
}

export default Orders
