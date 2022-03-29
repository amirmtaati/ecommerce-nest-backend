import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}
    @Mutation('signup')
    async signup(
        @Args('username') username: string,
        @Args('email') email: string,
        @Args('password') password: string,
    ) {
        return this.userService.signup(username, email, password);
    }
}
