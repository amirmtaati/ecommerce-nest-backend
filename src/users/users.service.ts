import { Injectable } from "@nestjs/common";
import { prisma } from "../../prisma"

@Injectable()
export class UsersService {
    async signup(username:string , email:string , password:string) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email
                } });
            if (user) 
                return "Error";
            
            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    password
                }
            });
            return newUser;
        } catch(err) {
            return err.mesage;
        }

    }
}
