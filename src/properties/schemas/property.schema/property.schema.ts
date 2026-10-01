import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PropertyDocument = HydratedDocument<PropertySchema>;

@Schema({ timestamps: true})
export class PropertySchema {

    @Prop({ required: true})
    ownerId!: string;

    @Prop({ required: true})
    propertyTypeId!: string;

    @Prop({ required: true})
    cityId!: string;

    @Prop({ required: true})
    address!: string;

    @Prop({ required: true})
    price!: number;

    @Prop({ required: true})
    title!: string;

    @Prop({ required: true})
    description!: string;
    
    @Prop({ required: true})
    status!: string;    

    @Prop({ required: true})
    rentalPeriod!: string;
}

export const PropertySchemaFactory = SchemaFactory.createForClass(PropertySchema);