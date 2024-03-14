"use client"
import { AppContext } from "@/context/Context";
import paymentIcon from "@/utils/paymentIcon";
import React, { useContext, useState } from 'react'


const PaymentMethods = ({ method }) => {


    const { paymentMethod, setPaymentMethod } = useContext(AppContext)


    const handleClick = (method) => {
        setPaymentMethod(method);
    };

    let icon = paymentIcon(method);

    return (
        <div onClick={() => { handleClick(method) }} className={`border-2 border-gray-200 p-5 w-[20rem] lg:w-[28rem] mb-2 mt-2 hover:bg-slate-200 flex gap-10 items-center 
        ${method === paymentMethod ? 'bg-slate-200' : ''} `
        }>
            {icon} < span > {method}</span >
        </div >
    )
}

export default PaymentMethods