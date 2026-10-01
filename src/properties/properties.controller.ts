import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@Controller('')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get("/properties")
  getAllProperties(@Query('cityId') cityId?: string) {
    return this.propertiesService.getAllProperties(cityId);
  }

  @Get('/property/:propertyId/images')
  getPropertyImages(@Param('propertyId') propertyId: string) {
    return this.propertiesService.getPropertyImages(propertyId);
  }

  @Post("/create-property")
  @UseGuards(JwtAuthGuard)
  createProperty(@Body() body: any) {
    return this.propertiesService.createProperty(body);
  }

  @Post('/addpropertyimages')
  @UseGuards(JwtAuthGuard)
  addPropertyImages(@Body() body: any) {
    return this.propertiesService.addPropertyImages(body);
  }
}
