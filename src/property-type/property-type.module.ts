import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyTypeSchema, PropertyTypeSchemaFactory } from './schemas/property-type.schema/property-type.schema';
import { PropertyTypeController } from './property-type.controller';
import { PropertyTypeService } from './property-type.service';

@Module({
      imports: [
          MongooseModule.forFeature([
              {
                  name: PropertyTypeSchema.name,
                  schema: PropertyTypeSchemaFactory,
              },
          ])
      ],
  controllers: [PropertyTypeController],
  providers: [PropertyTypeService]
})
export class PropertyTypeModule {}
