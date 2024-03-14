import axios from 'axios';

export default async function fetchData() {
    try {
        const response = await axios.get('https://groww-intern-assignment.vercel.app/v1/api/order-details');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}