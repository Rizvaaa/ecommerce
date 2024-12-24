  import React, { useState } from "react";
  import { useUser } from "../../contexts/UserContext";
  import { useNavigate } from "react-router";
  
  const Login = () => {
    const navigate=useNavigate()
    const {handleLogin} = useUser();
    const [form,setForm] = useState({email:"",password:""})
    const [message,setMessage] = useState("");

    const handleChange = (e) => {
      const {name,value}=e.target;
      setForm({...form,[name]:value})
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await handleLogin(form.email,form.password);
          console.log(response);
          setMessage(response)
        } catch (error) {
          console.error("Login Error:", error);
          setMessage("An unexpected error occurred. Please try again.");
        }
        
      };
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
        {message && <p className="text-red-500 ml-[45px]" >{message}</p> }
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <button onClick={()=>{navigate("/signup")}} className="text-blue-500 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;