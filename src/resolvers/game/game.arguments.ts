import { Field, InputType } from 'type-graphql';
import { BaseUserId } from '../user/user.arguments';
import { BaseTeamId } from '../football-team/football-team.arguments';

@InputType()
export class SaveGame {
    @Field(() => BaseTeamId)
    team1: BaseTeamId

    @Field(() => BaseTeamId)
    team2: BaseTeamId

    @Field(() => BaseUserId)
    referee: BaseUserId

    @Field(() => BaseUserId)
    delegate: BaseUserId
}
