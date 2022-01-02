import React from 'react'
import { useParams,useNavigate } from "react-router-dom"

const OrderDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const onBackClick = e => {
    e.preventDefault()
    navigate("/admin/orders")
  }

  return (
    <div>
      <h2>Details of order {params.orderId}</h2>
      <a href="#" onClick={onBackClick}> Back to Orders</a>
    </div>
  )
}

export default OrderDetails
