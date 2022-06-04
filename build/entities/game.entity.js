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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.Game = void 0;
const prop_1 = require("@typegoose/typegoose/lib/prop");
const type_graphql_1 = require("type-graphql");
const user_entity_1 = require("./user.entity");
const mongodb_1 = require("mongodb");
const football_team_entity_1 = require("./football-team.entity");
const typegoose_1 = require("@typegoose/typegoose");
let Game = class Game {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], Game.prototype, "_id", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(() => football_team_entity_1.FootballTeam),
    __metadata("design:type", football_team_entity_1.FootballTeam)
], Game.prototype, "team1", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(() => football_team_entity_1.FootballTeam),
    __metadata("design:type", football_team_entity_1.FootballTeam)
], Game.prototype, "team2", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Game.prototype, "referee", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Game.prototype, "delegate", void 0);
Game = __decorate([
    (0, type_graphql_1.ObjectType)()
], Game);
exports.Game = Game;
exports.Storage = (0, typegoose_1.getModelForClass)(Game, {
    schemaOptions: {
        timestamps: true
    }
});
