import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Game, Storage } from '../../entities/game.entity';
import { SaveGame } from './game.arguments';
import { UserType } from '../../entities/user-type.enum';

@Resolver()
export class GameResolver {

    @Query(() => [Game])
    async getAll(): Promise<Game[]> {
        return Storage.find({});
    }

    @Query(() => Game)
    async getOne(@Arg('_id') id: string): Promise<Game> {
        return Storage.findById(id);
    }

    @Authorized([UserType.BFS])
    @Mutation(() => Game)
    async create(@Arg('data') data: SaveGame): Promise<Game> {
        const entity = new Storage(data);
        await entity.save();

        return entity;
    }

    @Authorized([UserType.BFS])
    @Mutation(() => Game)
    async update(@Arg('_id') id: string, @Arg('data') data: SaveGame): Promise<Game> {
        return Storage.findByIdAndUpdate(id, data, {new: true});
    }

    @Authorized([UserType.BFS])
    @Mutation(() => Game)
    async delete(@Arg('_id') id: string): Promise<Game> {
        return Storage.findByIdAndRemove(id);
    }
}
