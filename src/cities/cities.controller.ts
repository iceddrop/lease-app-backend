import { Body, Post, Controller } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller()
export class CitiesController {
    constructor(private readonly citiesService:CitiesService) {}

        @Post('create-city')
        createCity(@Body() body: any) {
            return this.citiesService.createCity(body);
        }
}
