"use client"
import { useContext } from 'react'
import OrderItem from "./OrderItem"
import { AppContext } from "@/context/Context"


const OrderList = () => {
    const { products } = useContext(AppContext)
    return (

        products.length > 0 ?
            < div className="mt-5" >
                <span className="text-sm">Order List</span>
                {products.map(purchase => <OrderItem key={purchase.id} order={purchase} />)}
            </div > : <div className="mt-5">Add Items in the Cart</div>
    )
}

export default OrderList