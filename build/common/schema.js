"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = void 0;
const type_graphql_1 = require("type-graphql");
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("mongodb");
const game_resolver_1 = require("../resolvers/game/game.resolver");
const football_team_resolver_1 = require("../resolvers/football-team/football-team.resolver");
const user_resolver_1 = require("../resolvers/user/user.resolver");
const typegoose_middleware_1 = require("./typegoose-middleware");
const object_id_scalar_1 = require("./object-id.scalar");
const getSchema = async () => {
    return await (0, type_graphql_1.buildSchema)({
        resolvers: [user_resolver_1.UserResolver, game_resolver_1.GameResolver, football_team_resolver_1.FootballTeamResolver],
        emitSchemaFile: path_1.default.resolve(__dirname, 'schema.gql'),
        globalMiddlewares: [typegoose_middleware_1.TypegooseMiddleware],
        scalarsMap: [{ type: mongodb_1.ObjectId, scalar: object_id_scalar_1.ObjectIdScalar }]
    });
};
exports.getSchema = getSchema;
