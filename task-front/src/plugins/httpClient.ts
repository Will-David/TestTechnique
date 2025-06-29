import axios from "axios";

const axiosInstance = axios;

export const httpClient = axiosInstance.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        "Content-Type": "application/json"
    }
})