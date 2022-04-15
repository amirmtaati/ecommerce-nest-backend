
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInp {
    email: string;
    password: string;
    username: string;
}

export class LoginInp {
    email: string;
    password: string;
}

export class User {
    username: string;
    email: string;
    password: string;
    role: string;
    products?: Nullable<Nullable<Product>[]>;
}

export class LoginResp {
    token: string;
    user: User;
}

export abstract class IMutation {
    abstract signup(signUpInput?: Nullable<CreateUserInp>): User | Promise<User>;

    abstract login(loginInput?: Nullable<LoginInp>): LoginResp | Promise<LoginResp>;

    abstract createProduct(title: string, desc: string, price: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;

    abstract updateProduct(id: string, title?: Nullable<string>, desc?: Nullable<string>, price?: Nullable<number>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract addToCart(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Product {
    title: string;
    desc?: Nullable<string>;
    price: number;
    User?: Nullable<User>;
    userEmail?: Nullable<string>;
}

export abstract class IQuery {
    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract getProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Res {
    id: string;
}

type Nullable<T> = T | null;
