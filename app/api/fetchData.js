import axios from 'axios';

export default async function fetchData() {
    try {
        const response = await axios.get(process.env.API_URI);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}