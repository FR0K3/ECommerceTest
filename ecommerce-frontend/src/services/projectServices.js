import axios from "axios";
const BASE_URL = "http://localhost:8080/api"
const services = {};


services.fetchProducts = async (query) => {
    try {
        const response = await axios(`${BASE_URL}/products/?category=${query}`);

        if (response.status == 200)
            return response.data;

    } catch (error) {
        console.log(error);
    }
}

services.fetchProduct = async (id) => {
    try {
        const response = await axios(`${BASE_URL}/products/${id}`);

        if (response.status == 200)
            return response.data;

    } catch (error) {
        console.log(error);
    }
}

export default services;