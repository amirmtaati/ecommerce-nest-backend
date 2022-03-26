
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Product {
    title: string;
    desc?: Nullable<string>;
    price: number;
}

export abstract class IQuery {
    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}

export abstract class IMutation {
    abstract createProduct(title: string, desc: string, price: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
