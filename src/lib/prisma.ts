// 定义服务器的url
import { PrismaClient } from "@prisma/client";

declare global {
    var primsa: PrismaClient | undefined
}

export const client = globalThis.primsa | new PrismaClient();
if(process.env.NODE_ENV !== "production"){
    globalThis.primsa = client
}