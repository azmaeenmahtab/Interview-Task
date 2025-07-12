import React, { useState } from "react";

const RegisterCenter = () => {
  // States for each input field
  const [centerName, setCenterName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [centerPhone, setCenterPhone] = useState("");
  const [centerEmail, setCenterEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [establishedYear, setEstablishedYear] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeUpdates, setAgreeUpdates] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if(!token){
      return  alert("User not authorized");

    }

    // 🔐 Basic validations
    if (
      !centerName ||
      !streetAddress ||
      !city ||
      !state ||
      !postalCode ||
      !centerPhone ||
      !centerEmail ||
      !subdomain ||
      !contactName ||
      !contactPosition ||
      !contactPhone ||
      !contactEmail ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    //new concept
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(centerEmail) || !emailRegex.test(contactEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (isNaN(centerPhone) || isNaN(contactPhone)) {
      alert("Phone numbers must be numeric.");
      return;
    }

    if (!/^[a-zA-Z0-9-]+$/.test(subdomain)) {
      alert("Subdomain can only contain letters, numbers, and dashes.");
      return;
    }

    if (!agreeTerms) {
      alert("You must agree to the Terms and Privacy Policy.");
      return;
    }

    // Prepare payload
    const payload = {
      centerName,
      streetAddress,
      city,
      state,
      postalCode,
      centerPhone,
      centerEmail,
      website,
      establishedYear,
      subdomain,
      contactName,
      contactPosition,
      contactPhone,
      contactEmail,
      username,
      password
    };

    try {
  const response = await fetch("http://localhost:5000/api/submit/coachform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text(); 
  let data;

  try {
    data = JSON.parse(text); 
  } catch (jsonErr) {
    console.error("Not JSON response:", text, jsonErr); 
    throw new Error("Server did not return valid JSON");
  }

  if (!response.ok) {
    throw new Error(data.message || "Registration failed.");
  }

  alert("Coaching center registered successfully!");
  console.log(data);

} catch (err) {
  console.error("Registration error:", err.message);
  alert(err.message);
}

  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Register Your Coaching Center - COACH PRO
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Coaching Center Name *</label>
          <input type="text" value={centerName} onChange={(e) => setCenterName(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Street Address *</label>
          <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">City *</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">State/Division *</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Postal/ZIP Code *</label>
            <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Center Phone Number *</label>
            <input type="text" value={centerPhone} onChange={(e) => setCenterPhone(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Center Email *</label>
            <input type="email" value={centerEmail} onChange={(e) => setCenterEmail(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Website</label>
            <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full p-2 border rounded-md" />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Year Established</label>
          <input type="text" value={establishedYear} onChange={(e) => setEstablishedYear(e.target.value)} className="w-full p-2 border rounded-md" placeholder="e.g. 2010" />
        </div>

        <div>
          <label className="block font-medium mb-1">Subdomain *</label>
          <input type="text" value={subdomain} onChange={(e) => setSubdomain(e.target.value)} className="w-full p-2 border rounded-md" required />
          <p className="text-sm text-gray-500 mt-1">Your custom portal URL will be yourcenter.coachpro.com</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Position/Designation *</label>
            <input type="text" value={contactPosition} onChange={(e) => setContactPosition(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Phone Number *</label>
            <input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Email *</label>
            <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Username *</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded-md" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Password *</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Confirm Password *</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" checked={agreeUpdates} onChange={(e) => setAgreeUpdates(e.target.checked)} className="mt-1" />
          <label className="text-sm">
            I agree to receive updates, tips, and promotional messages.
          </label>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="mt-1" required />
          <label className="text-sm">
            By registering, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">Terms of Service</a> and{" "}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-200"
        >
          Register Your Coaching Center
        </button>
      </form>
    </div>
  );
};

export default RegisterCenter;
