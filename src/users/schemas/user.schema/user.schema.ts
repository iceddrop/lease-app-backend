import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<UserSchema>;

@Schema({ timestamps: true})
export class UserSchema {

    @Prop({ required: true})
    firstName!: string;

    @Prop({ required: true})
    lastName!: string;

    @Prop({ required: true, unique: true})
    email!: string;

    @Prop({ required: true})
    password!: string;

    @Prop({ required: true, enum: ['TENANT', 'OWNER']})
    role!: string;

    @Prop()
    cityId!: string;
}

export const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);