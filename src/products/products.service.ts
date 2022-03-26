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
            throw new HttpException(err.message, 400);
        }
    }

    async products() {
        try {
            const products = await prisma.product.findMany();
            return products;
        } catch (err) {
            throw new HttpException(err, 400);
        }
    }
}
