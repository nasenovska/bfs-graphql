import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { prop as Prop } from '@typegoose/typegoose/lib/prop';
import { User } from './user.entity';
import { getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class FootballTeam {

    @Field()
    _id: ObjectId;

    @Prop({required: true})
    @Field(() => User)
    trainer: User;

    @Prop({required: true})
    @Field(() => [User])
    players: [User];
}

export const Storage = getModelForClass(
    FootballTeam,
    {
        schemaOptions: {
            timestamps: true
        }
    }
);
