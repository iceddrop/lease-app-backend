import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PropertyTypeDocument = HydratedDocument<PropertyTypeSchema>;

@Schema({ timestamps: true })
export class PropertyTypeSchema {
    @Prop({ required: true, unique: true, trim: true })
    name!: string;

}

export const PropertyTypeSchemaFactory = SchemaFactory.createForClass(PropertyTypeSchema);