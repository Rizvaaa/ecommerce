
import axios from "axios";
const USER_URL = "http://localhost:5000/users"
const PRODUCT_URL = "http://localhost:5000/products"


export const getAllProduct = () =>{
    return axios.get(PRODUCT_URL);
}

export const getProductbyId = (ProductId) =>{
    return axios.get(`${PRODUCT_URL}/${ProductId}`);
}

export const updateCart = async (userId,cartData) => {
    return axios.put(`${USER_URL}/${userId}`,cartData);
}