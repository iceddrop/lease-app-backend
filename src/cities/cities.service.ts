import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { CitySchema, CityDocument } from './schemas/city.schema/city.schema';


@Injectable()
export class CitiesService {
   constructor(
    @InjectModel(CitySchema.name) 
    private cityModel: Model<CityDocument>,
   ) {}  
   
   async createCity(userData: {
    name: string;
    state: string;
   }) {
    const city = new this.cityModel(userData);
    return city.save();
   }
}
