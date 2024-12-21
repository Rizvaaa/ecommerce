  import React, { useState } from "react";
  import { loginUser } from "../api/userApi";
  import { useNavigate } from "react-router";
  
  const Login = () => {
    const navigate=useNavigate()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
        const user = await loginUser(email, password);
        if (user.length > 0) {
          alert("Login successful!");
          console.log("User Details:", user[0]);
          navigate("/")
          // Redirect or handle successful login
        } else {
          setError("Invalid Email or password");
        }
      } catch (err) {
        setError(err.message || "An error occurred. Please try again later.");
      }
    };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="riss@gmail.com"
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
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