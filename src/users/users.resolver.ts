import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext , Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Product } from 'src/graphql';
import {UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from 'src/auth/guards/jwt.guard';

@Resolver()
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Mutation(() => Product)
    @UseGuards(JwtAuthGuard)
    async addToCart(@Args('id') id: string , @Context() ctx:any) {
        return this.userService.addToCart(ctx.req.user.email, id);
    }
}
