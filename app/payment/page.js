import React from 'react'
import fetchData from "../api/fetchData"
import PaymentMethods from "@/components/PaymentMethods"
import Button from "@/components/Button"
import TotalAmt from "@/components/TotalAmt"

const page = async () => {

    const data = await fetchData()

    return (
        <div className="flex  justify-between items-center m-5 flex-col">
            <div className="border-2 border-black-600  p-5 h-[32rem] ">
                <h2 className="font-bold text-lg text-center ">Payment</h2>
                <div className="h-[100%] flex flex-col justify-evenly">
                    <div>
                        <h2 className="text-gray-600 font-bold ">Choose Payment Method</h2>
                        {data.paymentMethods.map(method => <PaymentMethods method={method} />)}
                    </div>
                    <div >
                        <TotalAmt />
                        <Button route="orderstatus">Make a payment</Button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default page