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
exports.GameResolver = void 0;
const type_graphql_1 = require("type-graphql");
const game_entity_1 = require("../../entities/game.entity");
const game_arguments_1 = require("./game.arguments");
const user_type_enum_1 = require("../../entities/user-type.enum");
let GameResolver = class GameResolver {
    async getAll() {
        return game_entity_1.Storage.find({});
    }
    async getOne(id) {
        return game_entity_1.Storage.findById(id);
    }
    async create(data) {
        const entity = new game_entity_1.Storage(data);
        await entity.save();
        return entity;
    }
    async update(id, data) {
        return game_entity_1.Storage.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        return game_entity_1.Storage.findByIdAndRemove(id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [game_entity_1.Game]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "getAll", null);
__decorate([
    (0, type_graphql_1.Query)(() => game_entity_1.Game),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "getOne", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS]),
    (0, type_graphql_1.Mutation)(() => game_entity_1.Game),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_arguments_1.SaveGame]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "create", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS]),
    (0, type_graphql_1.Mutation)(() => game_entity_1.Game),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, game_arguments_1.SaveGame]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "update", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS]),
    (0, type_graphql_1.Mutation)(() => game_entity_1.Game),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "delete", null);
GameResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], GameResolver);
exports.GameResolver = GameResolver;
