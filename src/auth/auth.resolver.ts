import {UseGuards} from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql.guard';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}
    @Mutation('signup')
    async signup(
        @Args('username') username: string,
        @Args('email') email: string,
        @Args('password') password: string,
    ) {
        return this.authService.signup(username, email, password);
    }

    @Query('login')
    async login(
        @Args('email') email: string,
        @Args('password') password: string,
    ) {
        return this.authService.login(email, password);
    }
}
