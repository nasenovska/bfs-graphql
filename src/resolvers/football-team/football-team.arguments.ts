import { Field, InputType } from 'type-graphql';
import { BaseUserId } from '../user/user.arguments';
import { ObjectId } from 'mongodb';

@InputType()
export class SaveTeam {
    @Field(() => BaseUserId)
    trainer: BaseUserId

    @Field(() => [BaseUserId])
    players: BaseUserId[]
}

@InputType()
export class BaseTeamId extends SaveTeam {
    @Field()
    _id: ObjectId;
}
