"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballTeamResolver = void 0;
const type_graphql_1 = require("type-graphql");
const football_team_entity_1 = require("../../entities/football-team.entity");
const football_team_arguments_1 = require("./football-team.arguments");
const user_type_enum_1 = require("../../entities/user-type.enum");
let FootballTeamResolver = class FootballTeamResolver {
    async getAll() {
        return football_team_entity_1.Storage.find({});
    }
    async getOne(id) {
        return football_team_entity_1.Storage.findById(id);
    }
    async create(data) {
        const entity = new football_team_entity_1.Storage(data);
        await entity.save();
        return entity;
    }
    async update(id, data) {
        return football_team_entity_1.Storage.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        return football_team_entity_1.Storage.findByIdAndRemove(id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [football_team_entity_1.FootballTeam]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FootballTeamResolver.prototype, "getAll", null);
__decorate([
    (0, type_graphql_1.Query)(() => football_team_entity_1.FootballTeam),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FootballTeamResolver.prototype, "getOne", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.TRAINER]),
    (0, type_graphql_1.Mutation)(() => football_team_entity_1.FootballTeam),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [football_team_arguments_1.SaveTeam]),
    __metadata("design:returntype", Promise)
], FootballTeamResolver.prototype, "create", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS]),
    (0, type_graphql_1.Mutation)(() => football_team_entity_1.FootballTeam),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, football_team_arguments_1.SaveTeam]),
    __metadata("design:returntype", Promise)
], FootballTeamResolver.prototype, "update", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS]),
    (0, type_graphql_1.Mutation)(() => football_team_entity_1.FootballTeam),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FootballTeamResolver.prototype, "delete", null);
FootballTeamResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], FootballTeamResolver);
exports.FootballTeamResolver = FootballTeamResolver;
