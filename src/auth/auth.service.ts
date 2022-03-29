import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    async signup(username: string, email: string, password: string) {
        try {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password, salt);

            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hash,
                },
            });

            return newUser;
        } catch (err) {
            throw new HttpException("Can't add user" , 400);
        }
    }
}
