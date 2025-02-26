
import { useState} from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useUser } from "../../contexts/UserContext";


 const Signup=()=> {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: ""});
  const {handleSignup}=useUser()

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = await handleSignup(form);
    if (message) alert(message);
};
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-90000 mb-6">Sign Up</h2>
        {/* {message && <p className="text-center text-red-500 mb-4">{message}</p>} */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-900 mb-1">Name</label>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="riss@gmial.com"
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
         <button onClick={()=>navigate("/login")} className="text-blue-500 hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
  }
 
export default Signup