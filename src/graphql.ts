
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<string>;
}

export class Token {
    token: string;
}

export abstract class IMutation {
    abstract signup(username: string, email: string, password: string, passConfirm: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createProduct(title: string, desc: string, price: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract updateProduct(id: string, title?: Nullable<string>, desc?: Nullable<string>, price?: Nullable<number>): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IQuery {
    abstract login(email: string, password: string): Nullable<Token> | Promise<Nullable<Token>>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract getProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Product {
    title: string;
    desc?: Nullable<string>;
    price: number;
}

type Nullable<T> = T | null;
