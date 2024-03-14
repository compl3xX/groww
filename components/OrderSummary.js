"use client"
import { AppContext } from "@/context/Context"
import totalPurchase from "@/utils/totalPurchase"
import { useContext } from "react"


export const OrderSummary = ({ styles }) => {

    const { products } = useContext(AppContext)

    let totalUserPurchase = totalPurchase(products)


    return (
        products.length > 0 ?
            <div className="flex flex-col flex-1 justify-between ">
                <h2 className={`font-bold text-gray-600 mt-5 text-lg ${styles ? styles : ''}`}>Order Summary</h2>
                <div className="flex flex-col gap-2 p-5 text-sm">
                    <div className="flex justify-between ">
                        <span>Order Amount:</span><span>{totalUserPurchase}</span>
                    </div>
                    <div className="flex justify-between ">
                        <span>Delivery Free:</span><span>10.00</span>
                    </div>
                    <div className="flex justify-between ">
                        <span>Discount:</span><span>10.00</span>
                    </div>
                </div>
            </div> : <div></div>
    )
}
