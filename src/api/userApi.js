import axios from "axios";
const USER_URL = "http://localhost:5000/users"


export const addUser= async(data)=>{
    await axios.post(USER_URL,data);
}

// export const isUserExist=async()=>{
//     await axios.get(USER_URL, { params: {email:form.email}})
// }

export const loginUser = async (email, password) => {
    try {
      const response = await axios.get(USER_URL, {
        params: { email, password },
      });
      return response.data;
    } catch (err) {
      console.error("Error fetching user:", err);
      throw new Error("Could not connect to the server.");
    }
  };