import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import {prisma} from  "../../prisma";


@Injectable()
export class ProductsService {
    async add(title: string, desc: string, price: number) {
        try {
            const product = await prisma.product.create({
                data: {
                    title,
                    desc,
                    price,
                },
            });

            return product;
        } catch (err) {
            throw new HttpException("Can't add product", 400);
        }
    }

    async deleteProduct(id: string) {
        const deletProduct = await prisma.product.delete({
            where: {
                id,
            },
        });

        return deletProduct;
    }

    async products() {
        try {
            const products = await prisma.product.findMany();
            return products;
        } catch (err) {
            throw new HttpException("Can't get products", 400);
        }
    }

    async getProduct(id: string) {
        try {
            const product = await prisma.product.findUnique({
                where: {
                    id,
                },
            });
            return product;
        } catch (err) {
            throw new HttpException("Can't get product", 400);
        }
    }

    async updateProduct(
        id: string,
        title?: string,
        desc?: string,
        price?: number,
    ) {
        try {
        const product = await prisma.product.update({
            where: {
                id,
            },
            data: {
                title,
                desc,
                price
            },
        });
        return product;
        } catch(err) {
            throw new HttpException("Can't update product" , 400);
        }
    }
}
