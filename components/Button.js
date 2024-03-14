"use client"

import React, { useContext } from 'react'

import { useRouter } from "next/navigation"
import totalPurchase from "@/utils/totalPurchase"
import { AppContext } from "@/context/Context"

const Button = ({ children, route }) => {

    const { products, paymentMethod } = useContext(AppContext)

    let totalUserPurchase = totalPurchase(products)

    const router = useRouter();

    const clickHandler = (route) => {
        if (totalUserPurchase > 0 && route === 'payment') router.push(`/${route}`)
        else if (paymentMethod !== null && route === 'orderstatus') router.push(`/${route}`)
        else if (route === '/')router.push(`/`)
    }

    return (
        <div>
            <button onClick={() => { clickHandler(route) }}>{children}</button>
        </div >
    )
}

export default Button