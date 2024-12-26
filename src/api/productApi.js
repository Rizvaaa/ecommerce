
import axios from "axios";
const USER_URL = "https://shopcart-n75k.onrender.com/users"
const PRODUCT_URL = "https://shopcart-n75k.onrender.com/products"


export const getAllProduct = () =>{
    return axios.get(PRODUCT_URL);
}

export const getProductbyId = (ProductId) =>{
    return axios.get(`${PRODUCT_URL}/${ProductId}`);
}

export const updateCart = async (userId,cartData) => {
    return axios.put(`${USER_URL}/${userId}`,cartData);
}