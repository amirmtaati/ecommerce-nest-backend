import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";

@Module({
    controllers: [],
    providers: [AuthService , AuthResolver]
})
export class AuthModule {}
