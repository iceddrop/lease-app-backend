import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FavoriteDocument = HydratedDocument<FavoriteSchema>;

@Schema({ timestamps: true })
export class FavoriteSchema {
  @Prop({ required: true })
  userId!: string;

  @Prop({ required: true })
  propertyId!: string;
}

export const FavoriteSchemaFactory = SchemaFactory.createForClass(FavoriteSchema);