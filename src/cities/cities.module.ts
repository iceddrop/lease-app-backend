import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema, CitySchemaFactory} from './schemas/city.schema/city.schema';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
      imports: [
          MongooseModule.forFeature([
              {
                  name: CitySchema.name,
                  schema: CitySchemaFactory,
              },
          ])
      ],
  controllers: [CitiesController],
  providers: [CitiesService]
})
export class CitiesModule {}
