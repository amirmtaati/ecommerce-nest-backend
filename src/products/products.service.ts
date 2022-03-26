import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
}
