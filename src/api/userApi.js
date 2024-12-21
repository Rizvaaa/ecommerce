import axios from "axios";
const USER_URL = "http://localhost:5000/users"


export const addUser= async(data)=>{
    await axios.post(USER_URL,data);
}

// export const isUserExist=async()=>{
//     await axios.get(USER_URL, { params: {email:form.email}})
// }