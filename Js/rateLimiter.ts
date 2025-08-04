// custom rate limiter
import { Request, Response, NextFunction } from 'express';
const express = require("express");
const app = express();
app.set('trust proxy', true)

let requestLog: Record<string, number[]> = {}

const MAX_REQUESTS = 5
const WINDOW_SIZE = 10 * 10000

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {

    const ip = req.headers["x-forwarded-for"]?.toString().split(',')[0]
    const now = Date.now();

    if(!requestLog[ip]){
        requestLog[ip] = [];
    }

    requestLog[ip] = requestLog[ip].filter((timestamps: number) => timestamps - now > WINDOW_SIZE)

    if(requestLog[ip].length > MAX_REQUESTS){
        return res.status(429).json({message: "too many requests"})
    }
    requestLog[ip].push(now);
    next();
}

app.use(rateLimiter);

app.get('/', (req: Request, res: Response)=>{
    res.send('ok')
})

app.listen(3000, ()=>{
    console.log("server listening to port 3000")
})

