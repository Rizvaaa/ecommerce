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
import React, { createContext, useContext, useState } from "react";

// Create UserContext
 const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [name, setName] = useState(() => localStorage.getItem("name") || "");

  // Handle Login
  const handleLogin = (userEmail, userName) => {
    localStorage.setItem("email", userEmail);
    localStorage.setItem("name", userName);
    setEmail(userEmail);
    setName(userName);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    setEmail("");
    setName("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        name,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser  = () => useContext(UserContext);