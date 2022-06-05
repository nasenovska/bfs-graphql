import { buildSchema } from 'type-graphql';
import path from 'path';
import { ObjectId } from 'mongodb';
import { GameResolver } from '../resolvers/game/game.resolver';
import { FootballTeamResolver } from '../resolvers/football-team/football-team.resolver';
import { UserResolver } from '../resolvers/user/user.resolver';
import { TypegooseMiddleware } from './typegoose-middleware';
import { ObjectIdScalar } from './object-id.scalar';
import { authChecker } from './auth-checker';

export const getSchema = async () => {
    return await buildSchema({
        resolvers: [UserResolver, GameResolver, FootballTeamResolver],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{type: ObjectId, scalar: ObjectIdScalar}],
        authChecker: authChecker
    });
}

