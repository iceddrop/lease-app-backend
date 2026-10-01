import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { UserSchema, UserDocument } from './schemas/user.schema/user.schema';


@Injectable()
export class UsersService {
   constructor(
    @InjectModel(UserSchema.name) 
    private userModel: Model<UserDocument>,
   ) {}  
   
   async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
   }) {
    const user = new this.userModel(userData);
    return user.save();
   }

   async getUserByOwnerId(ownerId: string) {
    return this.userModel.findById(ownerId);
   }

   async getAllUsers() {
    return this.userModel.find();
   }

}
