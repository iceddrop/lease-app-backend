import { Body, Post, Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService:UsersService) {}
        
        @Post('/register')
        createUser(@Body() body: any) {
            return this.usersService.createUser(body);
        }

        @Get('/users')
        getAllUsers() {
            return this.usersService.getAllUsers();
        }

        @Get('/users/:ownerId')
        getUserByOwnerId(@Param('ownerId') ownerId: string) {
            return this.usersService.getUserByOwnerId(ownerId);
        }
}
