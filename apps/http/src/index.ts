import express from "express"
import { auth } from "./auth";
import prisma from  "@repo/db/client"
import { CreateUserSchema,SigninSchema,CreateRoomSchema} from "@repo/common/types"
import  cors from "cors"; 

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"

// zod 
const app=express();
app.use(express.json());
app.use(cors());

app.post("/signup",async (req,res)=>{
    const parsedata=CreateUserSchema.safeParse(req.body);
    if(!parsedata.success){
        res.json({"meassage":"provide correct data"})
        return;
    }
    try {
         const user=await prisma.user.create({
            data:{
               name:parsedata.data.name,
               password:parsedata.data.password,
               email:parsedata.data.email
            }
        })
        res.json({
            userId:user.id
        })  
    } catch (error) {
        res.json({"msg":"error in signup"})
    }

})

app.post("/signin",async(req,res)=>{
   const parsedata=SigninSchema.safeParse(req.body);
   if(!parsedata.success){
    res.json({"messge":"error in signin"})
    return ;
   }
      const user = await prisma.user.findFirst({
        where: {
            email: parsedata.data.email,
            password: parsedata.data.password
        }
    })
    if(!user){
        res.json({"message":"not authorized"});
        return ;
    }
    // create toeken send it 
    try {
      const token=jwt.sign({
        userId:user?.id
      },JWT_SECRET)
        res.json({
            token
        })
    } catch (error) {
        res.json({"msg":"error in signup"})
    }

})
app.post("/createroom", auth,async(req,res)=>{
   const parsedata=CreateRoomSchema.safeParse(req.body);
   if(!parsedata.success){
    res.json({"messge":"error in signin"})
    return ;
   }

    try {
        // adding to sb
        //@ts-ignore
        const userId=req.userId;
         const room=await prisma.room.create({
            data:{
                slug:parsedata.data.slug,
                adminId:userId
            }
        }) 
        res.json({
            roomId:room.id
        })
    } catch (error) {
        res.json({"msg":"room exist"})
    }
})

app.get("/chats/:roomId",async (req,res)=>{
    const roomId =Number(req.params.roomId);
    const chats =await prisma.chat.findMany({
        where:{
            roomId
        }
    })
    res.json(chats);

})

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prisma.room.findFirst({
        where: {
            slug
        }
    });

    res.json({
        room
    })
})




app.listen(3001);