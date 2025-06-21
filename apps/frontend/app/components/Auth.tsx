"use client"
import { useRouter } from "next/navigation"

export function Auth({issignup}:{issignup:boolean}){
    const router =useRouter();

    return (
        <div className="bg-black  text-white w-screen h-screen flex justify-center items-center">
      <div className="bg-linear-to-r from-cyan-500 to-blue-500  rounded-lg flex flex-col justify-center p-2">
      <input  type="email" placeholder="enter ur email"></input>
      <input type=" password" placeholder="password" ></input>
      {issignup && <input type="text" placeholder="name"></input>}
      <div className="flex justify-center ">
        <button  className="hover:bg-blue-700" onClick={()=>{
        if(issignup){
            router.push("/signin");
            return;
        }else{
            router.push("/something")
        }
      }}>{issignup?"signup":"signin"}</button>
      </div>
      </div>
        </div>
    )
}