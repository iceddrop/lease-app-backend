import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CityDocument = HydratedDocument<CitySchema>;

@Schema({ timestamps: true })
export class CitySchema {
    @Prop({ required: true, unique: true, trim: true })
    name!: string;

    @Prop({ required: true, trim: true })
    state   !: string;
}

export const CitySchemaFactory = SchemaFactory.createForClass(CitySchema);