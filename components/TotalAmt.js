"use client"

import { AppContext } from "@/context/Context"
import totalPurchase from "@/utils/totalPurchase"
import React, { useContext } from 'react'

const TotalAmt = () => {

    const { products } = useContext(AppContext)

    let totalUserPurchase = totalPurchase(products)

    return (
        <div className="font-bold mt-2 mb-2">Total: {totalUserPurchase}</div>
    )
}

export default TotalAmt