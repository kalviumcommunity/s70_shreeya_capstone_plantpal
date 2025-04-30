import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          Create Your Account 🌱
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-green-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jane Plantlover"
              className="w-full mt-1 px-4 py-2 border border-green-200 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-green-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@plantpal.com"
              className="w-full mt-1 px-4 py-2 border border-green-200 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-green-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a strong password"
              className="w-full mt-1 px-4 py-2 border border-green-200 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-green-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="underline hover:text-green-800">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
