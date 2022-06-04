import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { FootballTeam, Storage } from '../../entities/football-team.entity';
import { SaveTeam } from './football-team.arguments';
import { UserType } from '../../entities/user-type.enum';

@Resolver()
export class FootballTeamResolver {

    @Query(() => [FootballTeam])
    async getAll(): Promise<FootballTeam[]> {
        return Storage.find({});
    }

    @Query(() => FootballTeam)
    async getOne(@Arg('_id') id: string): Promise<FootballTeam> {
        return Storage.findById(id);
    }

    @Authorized([UserType.TRAINER])
    @Mutation(() => FootballTeam)
    async create(@Arg('data') data: SaveTeam): Promise<FootballTeam> {
        const entity = new Storage(data);
        await entity.save();

        return entity;
    }

    @Authorized([UserType.BFS])
    @Mutation(() => FootballTeam)
    async update(@Arg('_id') id: string, @Arg('data') data: SaveTeam): Promise<FootballTeam> {
        return Storage.findByIdAndUpdate(id, data, {new: true});
    }

    @Authorized([UserType.BFS])
    @Mutation(() => FootballTeam)
    async delete(@Arg('_id') id: string): Promise<FootballTeam> {
        return Storage.findByIdAndRemove(id);
    }
}
