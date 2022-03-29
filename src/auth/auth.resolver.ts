import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('User')
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
}
