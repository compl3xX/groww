"use client"

import fetchData from "@/app/api/fetchData";

import { useQuery } from "@tanstack/react-query";

import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [paymentMethod, setPaymentMethod] = useState(null);


    const { data } = useQuery({
        queryKey: ['data'], queryFn: async () => await fetchData()
    })

    useEffect(() => {
        if (data) {
            setProducts(data.products)
        }
    }, [data])


    return <AppContext.Provider value={{ products, setProducts, paymentMethod,setPaymentMethod }}>{children}</AppContext.Provider>;
};
