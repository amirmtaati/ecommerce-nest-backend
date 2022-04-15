import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";

@Module({
    exports: [UsersService],
    providers: [UsersService , UsersResolver]
})
export class UsersModule {}
