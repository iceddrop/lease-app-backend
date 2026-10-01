import { Body, Controller, Post } from '@nestjs/common';
import { PropertyTypeService } from './property-type.service';

@Controller('property-type')
export class PropertyTypeController {
  constructor(private readonly propertyTypeService: PropertyTypeService) {}

  @Post()
  createPropertyType(@Body() body: any) {
    return this.propertyTypeService.createPropertyType(body);
  }
}
