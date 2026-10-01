import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PropertyImageDocument = HydratedDocument<PropertyImageSchema>;

@Schema({ timestamps: true })
export class PropertyImageSchema {
  @Prop({ required: true })
  propertyId!: string;

  @Prop({ required: true })
  imageUrl!: string;

  @Prop({ default: 0 })
  position!: number;
}

export const PropertyImageSchemaFactory =
  SchemaFactory.createForClass(PropertyImageSchema);