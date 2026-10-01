import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { PropertiesService } from './properties.service';
import { PropertySchema } from './schemas/property.schema/property.schema';
import { PropertyImageSchema } from './schemas/property-image.schema/property-image.schema';

describe('PropertiesService', () => {
  let service: PropertiesService;
  const propertyImageModel = {
    countDocuments: jest.fn(),
    insertMany: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertiesService,
        { provide: getModelToken(PropertySchema.name), useValue: {} },
        {
          provide: getModelToken(PropertyImageSchema.name),
          useValue: propertyImageModel,
        },
      ],
    }).compile();

    service = module.get<PropertiesService>(PropertiesService);
    propertyImageModel.countDocuments.mockResolvedValue(0);
    propertyImageModel.insertMany.mockResolvedValue([]);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('inserts a batch of images with positions after existing images', async () => {
    propertyImageModel.countDocuments.mockResolvedValue(2);
    const images = [{ imageUrl: 'one.jpg' }, { imageUrl: 'two.jpg' }];

    await service.addPropertyImages({ propertyId: 'property-1', images });

    expect(propertyImageModel.insertMany).toHaveBeenCalledWith([
      { propertyId: 'property-1', imageUrl: 'one.jpg', position: 2 },
      { propertyId: 'property-1', imageUrl: 'two.jpg', position: 3 },
    ]);
  });

  it('rejects an upload that would exceed four images', async () => {
    propertyImageModel.countDocuments.mockResolvedValue(3);

    await expect(
      service.addPropertyImages({
        propertyId: 'property-1',
        images: [{ imageUrl: 'one.jpg' }, { imageUrl: 'two.jpg' }],
      }),
    ).rejects.toThrow('A property can have at most four images');

    expect(propertyImageModel.insertMany).not.toHaveBeenCalled();
  });
});
