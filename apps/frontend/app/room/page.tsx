"use client"

import { HTTP_BACKEND } from "@/config";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useRef } from "react";

export default function Page() {
     const router = useRouter();
     const createref=useRef<HTMLInputElement>(null);
     const joinref=useRef<HTMLInputElement>(null);
async function contin() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be signed in to create a room");
    return;
  }

  try {
    const slug=createref.current?.value;
    const response = await axios.post(`${HTTP_BACKEND}/createroom`, {
      slug
    }, {
      headers: {
        Authorization: token
      }
    });

    if (response.status === 200) {
      const roomId = response.data.roomId;
      router.push(`/canvas/${roomId}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.msg || "Failed to create room");
    } else {
      alert("Unexpected error occurred");
    }
  }
}

async function join() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be signed in to create a room");
    return;
  }

  try {
    const roomname=joinref.current?.value;
    const response = await axios.post(`${HTTP_BACKEND}/joinroom`, {
       roomname
    }, {
      headers: {
        Authorization: token
      }
    });
    if (response.status === 200) {
      const roomId = response.data.roomId;
      router.push(`/canvas/${roomId}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.msg || "Failed to create room");
    } else {
      alert("Unexpected error occurred");
    }
  }

}



    return <div>
         <div className="w-screen h-screen bg-gradient-to-br from-black to-gray-900 flex justify-center items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-sm shadow-xl text-white space-y-6">
        <div className="flex flex-col ">
            <div >
            <input  ref={createref} type="text" placeholder="roomname"></input>
            <button className="px-4 border-2 py-2" onClick={contin}>Create</button>
            </div>
            <div  className="mt-2">
            <input ref={joinref} type="text" placeholder="roomname"></input>
            <button className="px-6 border-2  py-2" onClick={join}>join</button>
            </div>        </div>
        </div>
    </div>
    </div>
}