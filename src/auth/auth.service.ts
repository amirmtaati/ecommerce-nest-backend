import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginInp , createUserInp} from './interfaces/auth.interfaces';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService,
    ) {}

    async signup(createUserInp: createUserInp) {
        const {username , email , password} = createUserInp;
        try {
            return this.userService.createOne(username, email, password);
        } catch (err) {
            throw new HttpException("Can't add user", 400);
        }
    }

    async validateUser(email: string, password: string) {
        try {
            const user = await this.userService.findOne(email);

            const compare = await bcrypt.compare(password, user.password);

            return compare;
        } catch (err) {
            throw new HttpException("Can't validate user", 400);
        }
    }

    async login(loginInput: LoginInp) {
        try {
            const validate = await this.validateUser(loginInput.email, loginInput.password);

            if (validate) {
                const user = await this.userService.findOne(loginInput.email);
                
                const payload = {
                    user
                };

                const { password , ...result} = user;

                return {
                    token: this.jwtService.sign(payload),
                    user : result,
                };
            } else {
                throw new HttpException('Cant login', 400);
            }
        } catch (err) {
            throw new HttpException(err, 400);
        }
    }
}
