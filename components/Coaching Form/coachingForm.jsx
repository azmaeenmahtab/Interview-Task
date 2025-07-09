import React from "react";

const RegisterCenter = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Register Your Coaching Center - COACH PRO
      </h1>

      <form className="space-y-6">

        {/* Coaching Info */}
        <div>
          <label className="block font-medium mb-1">Coaching Center Name *</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Street Address *</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">City *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">State/Division *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Postal/ZIP Code *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Center Phone Number *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Center Email *</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Website</label>
            <input type="url" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Year Established</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="e.g. 2010" />
        </div>

        {/* Portal */}
        <div>
          <label className="block font-medium mb-1">Subdomain *</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="yourcenter"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Your custom portal URL will be yourcenter.coachpro.com
          </p>
        </div>

        {/* Contact Person */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Position/Designation *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Phone Number *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Email *</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
        </div>

        {/* Account Setup */}
        <div>
          <label className="block font-medium mb-1">Username *</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Password *</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block font-medium mb-1">Confirm Password *</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
        </div>

        {/* Agreements */}
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1" id="updates" />
          <label htmlFor="updates" className="text-sm">
            I agree to receive updates, tips, and promotional messages. You can unsubscribe at any time.
          </label>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1" id="terms" required />
          <label htmlFor="terms" className="text-sm">
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
