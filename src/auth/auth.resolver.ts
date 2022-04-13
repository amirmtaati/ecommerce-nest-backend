import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql.guard';
import { LoginInp, createUserInp } from './interfaces/auth.interfaces';
import { LoginResp, User } from 'src/graphql';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}
    @Mutation(() => User)
    async signup(@Args('signUpInput') signUpInput: createUserInp) {
        return this.authService.signup(signUpInput);
    }

    @Mutation(() => LoginResp)
    @UseGuards(GqlAuthGuard)
    async login(@Args('loginInput') loginInput: LoginInp) {
        return this.authService.login(loginInput);
    }
}
