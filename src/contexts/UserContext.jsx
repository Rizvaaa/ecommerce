// import React, { createContext, useState } from 'react'; 
// import { addUser } from '../api/userApi';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [users, setUsers] = useState([]);

//     // Function to handle user signup
//      const signupUser = async (userData) => {
//         try {
//             console.log(userData);
//            const response= addUser(userData)
            
        
//             if (response.ok) {
//                 const newUser = await response.json();
//                 setUsers([...users, newUser]);
//                 return { success: true };
//             } else {
//                 return { success: false, message: 'Failed to sign up. Try again.' };
//             }
//         } catch (error) {
//             console.error('Error during signup:', error);
//             return { success: false, message: 'Error connecting to the server.' };
//         }
//     };

//     return (
//         <UserContext.Provider value={{ users, signupUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
import React, { createContext, use, useContext, useState } from "react";
import { addUser,emailCheck,userCheck } from "../api/userApi";
import { useNavigate } from "react-router";
// Create UserContext
 export const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const navigate=useNavigate()

  const handleSignup = async(userData) => {
    try {
      const isEmail = await emailCheck(userData.email)
      if(!isEmail){ 
        const newUser = await addUser(userData);
        setUser(newUser);
        localStorage.setItem("user",newUser.email);
        localStorage.setItem("userId",newUser.id);
        navigate('/');
        return "";
      }
      else return "User already exist!"
    } catch (error) {
      console.error("Signup error:", error);
      return "An error occurred during signup.";
    }
      
  };

  const handleLogin = async(email,password) => {
    try {
      const [userValidation] = await userCheck(email,password);
      if(userValidation){
          if (userValidation.role === "admin"){
            setUser(userValidation)
            localStorage.setItem("admin",userValidation.email)
            navigate('/admin');
            return "";
          }
          else{
            setUser(userValidation)
            localStorage.setItem("user",userValidation.email);
            localStorage.setItem("userId",userValidation.id);
            localStorage.setItem("userName",userValidation.name);
            navigate('/');
            return "";
          }
      }else{
        return "Invalid email or password"
      }
    } catch (error) {
      console.error('login error:',error);
      return "An error occurred during login.";
    }
  };

  const handleLogout = () => {
    setUser([]);
    localStorage.clear();
    // navigate("/login");
  };
  

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleSignup,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser  = () => useContext(UserContext);