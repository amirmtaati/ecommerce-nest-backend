import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsControllers {
    constructor(private readonly productService: ProductsService) {}

    @Post('add')
    async addProduct(
        @Body('title') title: string,
        @Body('desc') desc: string,
        @Body('price') price: number,
    ) {
        const product = await this.productService.add(title, desc, price);
        return { product };
    }
}
