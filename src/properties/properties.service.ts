import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PropertySchema,
  PropertyDocument,
} from './schemas/property.schema/property.schema';
import {
  PropertyImageSchema,
  PropertyImageDocument,
} from './schemas/property-image.schema/property-image.schema';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(PropertySchema.name)
    private propertyModel: Model<PropertyDocument>,

    @InjectModel(PropertyImageSchema.name)
    private propertyImageModel: Model<PropertyImageDocument>,
  ) {}

  async createProperty(userData: {
    ownerId: string;
    cityId: string;
    propertyTypeId: string;
    address: string;
    price: number;
    title: string;
    description: string;
    status: string;
    rentalPeriod: string;
  }) {
    const property = new this.propertyModel(userData);
    return property.save();
  }

  async getAllProperties(cityId?: string) {
    return this.propertyModel.find(cityId ? { cityId } : {});
  }

  async getPropertyImages(propertyId: string) {
    return this.propertyImageModel
      .find({ propertyId })
      .sort({ position: 1 });
  }

  async addPropertyImages(imageData: {
    propertyId: string;
    images?: { imageUrl: string; position?: number }[];
    imageUrl?: string;
    position?: number;
  }) {
    const images = imageData.images ?? (imageData.imageUrl
      ? [{ imageUrl: imageData.imageUrl, position: imageData.position }]
      : []);

    if (images.length === 0) {
      throw new BadRequestException('At least one property image is required');
    }

    const existingCount = await this.propertyImageModel.countDocuments({
      propertyId: imageData.propertyId,
    });

    if (existingCount + images.length > 4) {
      throw new BadRequestException('A property can have at most four images');
    }

    return this.propertyImageModel.insertMany(
      images.map((image, index) => ({
        propertyId: imageData.propertyId,
        imageUrl: image.imageUrl,
        position: image.position ?? existingCount + index,
      })),
    );
  }
}
