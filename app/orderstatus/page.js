import Button from "@/components/Button";
import { OrderSummary } from "@/components/OrderSummary"
import generateOrderStatus from "@/utils/generateOrderStatus"
import React from 'react'

const page = () => {

    const orderStatus = generateOrderStatus();

    let showOrderSummary = true;

    if (orderStatus.code === 1) {
        showOrderSummary = false
    }

    return (
        <div className="flex  justify-between items-center m-5 flex-col">
            <div className="border-2 border-black-600 p-5 h-[32rem] w-[21rem] lg:w-[30rem] " >
                <h2 className="font-bold text-lg text-center ">{orderStatus.status}</h2>
                {showOrderSummary && <OrderSummary styles="text-center" />}
                {!showOrderSummary && <div className="h-[100%] flex flex-col justify-center"><Button route="/">Go back to cart </Button></div>}
            </div>
        </div>
    )
}

export default page
