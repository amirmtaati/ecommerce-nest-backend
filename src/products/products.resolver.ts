import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';

@Resolver('Product')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Mutation('createProduct')
    async addProduct(
        @Args('title') title: string,
        @Args('desc') desc: string,
        @Args('price') price: number,
    ) {
        return this.productsService.add(title, desc, price);
    }

    @Mutation("deleteProduct")
    async removeProduct(@Args("id") id : string) {
        return this.productsService.deleteProduct(id);
    }

    @Query('products')
    async products() {
        return this.productsService.products();
    }
}
