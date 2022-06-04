import { prop as Prop } from '@typegoose/typegoose/lib/prop';
import { Field, ObjectType } from 'type-graphql';
import { User } from './user.entity';
import { ObjectId } from 'mongodb';
import { FootballTeam } from './football-team.entity';
import { getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class Game {

    @Field()
    _id: ObjectId;

    @Prop({required: true})
    @Field(() => FootballTeam)
    team1: FootballTeam;

    @Prop({required: true})
    @Field(() => FootballTeam)
    team2: FootballTeam;

    @Prop({required: true})
    @Field(() => User)
    referee: User;

    @Prop({required: true})
    @Field(() => User)
    delegate: User;
}

export const Storage = getModelForClass(
    Game,
    {
        schemaOptions: {
            timestamps: true
        }
    }
);
