import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsResolver } from "./products.resolver";

@Module({
    controllers : [],
    providers   : [ProductsService , ProductsResolver]
})
export class ProductsModule {}
