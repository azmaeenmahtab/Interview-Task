import React, { useState } from 'react';

const SignUp = () => {
  // Separate useState for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example validation (optional)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Send data to backend
  };



  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-[#1e293b] p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-300 block mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
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
            <label className="text-gray-300 block mb-1">Number</label>
            <input
              type="email"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
          <div>
            <label className="text-gray-300 block mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-6 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
