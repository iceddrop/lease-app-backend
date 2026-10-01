import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { PropertyTypeSchema, PropertyTypeDocument } from './schemas/property-type.schema/property-type.schema';


@Injectable()
export class PropertyTypeService {
   constructor(
    @InjectModel(PropertyTypeSchema.name) 
    private propertyTypeModel: Model<PropertyTypeDocument>,
   ) {}  
   
   async createPropertyType(propertyTypeData: {
    name: string;
   }) {
    const propertyType = new this.propertyTypeModel(propertyTypeData);
    return propertyType.save();
   }
}
