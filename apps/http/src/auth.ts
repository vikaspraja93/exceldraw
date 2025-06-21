import {JWT_SECRET} from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function auth(req:Request, res: Response, next: NextFunction): void {
    const token= req.headers["authorization"]??"";

    const decode= jwt.verify(token,JWT_SECRET);
    
     if (decode) {
        // @ts-ignore: TODO: Fix this
        req.userId = decode.userId;
        next();}
    else{
         res.status(403).json({
            message: "Unauthorized"
        })
      }
}