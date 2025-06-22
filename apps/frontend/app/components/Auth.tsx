"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
 import {HTTP_BACKEND} from "../../config"

export function Auth({ issignup }: { issignup: boolean }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handle=async ()=>{
     if(issignup){
      try {
      const response = await axios.post(`${HTTP_BACKEND}/signup`, {
        email,
        password,
        name
      });
      if (response.status === 200) {
        router.push("/signin"); 
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "error in signup");
      } else {
        alert("An unexpected error occurred");
      }
    }
     }
    else{
      try {
      const response = await axios.post(`${HTTP_BACKEND}/signin`, {
        email,
        password,
      });
      if (response.status === 200) {
          const parsedate=response.data;
          const token=parsedate.token;
      console.log(token);
      localStorage.setItem("token", token);
        router.push("/room"); 
      }
    } catch (error) {
      // Handle errors
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Sign-in failed");
      } else {
        alert("An unexpected error occurred");
      }
    }
     }
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black to-gray-900 flex justify-center items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-sm shadow-xl text-white space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          {issignup ? "Create Account" : "Welcome Back"}
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-white/20 rounded-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-white/20 rounded-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {issignup && (
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-white/20 rounded-xl placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        </div>

        <button
          onClick={handle}
          className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 transition"
        >
          {issignup ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
}
