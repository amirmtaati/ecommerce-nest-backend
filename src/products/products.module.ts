import { Module } from "@nestjs/common";
import { ProductsControllers } from "./products.controllers";
import { ProductsService } from "./products.service";

@Module({
    controllers : [ProductsControllers],
    providers   : [ProductsService]
})
export class ProductsModule {}
