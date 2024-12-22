import axios from "axios"

const PRODUCT_URL = "http://localhost:5000/products"


export const getAllProducts= async()=>{
    const res = await axios.get(PRODUCT_URL);
    console.log(res)
    return res
}
export const getProductById=async(productid)=>{
    return await axios.get(`${PRODUCT_URL}/${productid}`)

}