import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { prop as Prop } from '@typegoose/typegoose/lib/prop';
import { UserType } from './user-type.enum';
import { getModelForClass, modelOptions, Severity } from '@typegoose/typegoose';

@modelOptions(
    {
        options: {
            allowMixed: Severity.ALLOW
        }
    }
)

@ObjectType()
export class User {
    @Field()
    _id: ObjectId;

    @Prop({required: true})
    @Field()
    firstName: string;

    @Prop({required: true})
    @Field()
    lastName: string;

    @Prop({required: true})
    @Field()
    email: string;

    @Prop({required: true})
    @Field()
    password: string;

    @Prop({required: true})
    @Field()
    age: number;

    @Prop({required: true})
    @Field()
    turnover: number;

    @Prop({default: UserType.PLAYER})
    @Field(() => String)
    type: string;
}

export const Storage = getModelForClass(
    User,
    {
        schemaOptions: {
            timestamps: true
        }
    }
);
