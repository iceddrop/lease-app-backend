import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaFactory} from './schemas/user.schema/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserSchema.name,
                schema: UserSchemaFactory,
            },
        ])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
