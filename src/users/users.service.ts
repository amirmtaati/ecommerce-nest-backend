import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma';
import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
}
