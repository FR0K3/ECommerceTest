import axios from "axios";
const BASE_URL = "http://localhost:8080/api"
const services = {};

services.fetchCategories = async () => {
    try {
        const response = await axios(`${BASE_URL}/categories/`);

        if (response.status == 200)
            return response.data;

    } catch (error) {
        console.log(error);
    }
}

export default services;