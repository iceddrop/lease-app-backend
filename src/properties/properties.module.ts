import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PropertySchema,
  PropertySchemaFactory,
} from './schemas/property.schema/property.schema';
import {
  PropertyImageSchema,
  PropertyImageSchemaFactory,
} from './schemas/property-image.schema/property-image.schema';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PropertySchema.name,
        schema: PropertySchemaFactory,
      },
      {
        name: PropertyImageSchema.name,
        schema: PropertyImageSchemaFactory,
      },
    ]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
