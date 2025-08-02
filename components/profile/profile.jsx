import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    // Dummy fetch — you could replace this with actual logic later
    const name = localStorage.getItem('name') || 'John Doe';
    const email = localStorage.getItem('email') || 'john@example.com';

    setUser({ name, email });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Optional: remove user data
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white rounded-xl shadow-md p-6 text-center">
      <img
        src="https://www.gravatar.com/avatar/?d=mp"
        alt="profile"
        className="w-20 h-20 mx-auto rounded-full border"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default MyProfile;
