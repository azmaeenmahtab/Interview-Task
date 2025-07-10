import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validation (customize as needed)
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }


    // login api
    try{
    const body = {
      email: email,
      password: password
    }

    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    console.log("User registered:", data.user.token);
    const token = data.user.token;

    localStorage.setItem("token", token);

    navigate('/');

    }catch(error){
          console.error("Registration error:", error.message);

    }

    

  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex justify-center items-center px-4">
      <div className="max-w-md w-full bg-[#1e293b] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-300 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="text-gray-300 block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 mt-6 text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
