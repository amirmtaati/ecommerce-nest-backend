import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Resolver('Product')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Mutation('createProduct')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async addProduct(
        @Args('title') title: string,
        @Args('desc') desc: string,
        @Args('price') price: number,
    ) {
        return this.productsService.add(title, desc, price);
    }

    @Mutation('deleteProduct')
    async removeProduct(@Args('id') id: string) {
        return this.productsService.deleteProduct(id);
    }

    @Mutation('updateProduct')
    async updateProduct(
        @Args('id') id: string,
        @Args('title') title?: string,
        @Args('desc') desc?: string,
        @Args('price') price?: number,
    ) {
        return this.productsService.updateProduct(id, title, desc, price);
    }

    @Query('products')
    async products() {
        return this.productsService.products();
    }

    @Query('getProduct')
    async getProduct(@Args('id') id: string) {
        return this.productsService.getProduct(id);
    }
}
