import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Product } from 'src/graphql';

@Resolver('Product')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Mutation(() => Product)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async createProduct(
        @Args('title') title: string,
        @Args('desc') desc: string,
        @Args('price') price: number,
    ) {
        return this.productsService.add(title, desc, price);
    }

    @Mutation(() => Product)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async deleteProduct(@Args('id') id: string) {
        return this.productsService.deleteProduct(id);
    }

    @Mutation(() => Product)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async updateProduct(
        @Args('id') id: string,
        @Args('title') title?: string,
        @Args('desc') desc?: string,
        @Args('price') price?: number,
    ) {
        return this.productsService.updateProduct(id, title, desc, price);
    }

    @Query(() => [Product])
    async products() {
        return this.productsService.products();
    }

    @Query('getProduct')
    async getProduct(@Args('id') id: string) {
        return this.productsService.getProduct(id);
    }
}
