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
exports.BaseTeamId = exports.SaveTeam = void 0;
const type_graphql_1 = require("type-graphql");
const user_arguments_1 = require("../user/user.arguments");
const mongodb_1 = require("mongodb");
let SaveTeam = class SaveTeam {
};
__decorate([
    (0, type_graphql_1.Field)(() => user_arguments_1.BaseUserId),
    __metadata("design:type", user_arguments_1.BaseUserId)
], SaveTeam.prototype, "trainer", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [user_arguments_1.BaseUserId]),
    __metadata("design:type", Array)
], SaveTeam.prototype, "players", void 0);
SaveTeam = __decorate([
    (0, type_graphql_1.InputType)()
], SaveTeam);
exports.SaveTeam = SaveTeam;
let BaseTeamId = class BaseTeamId extends SaveTeam {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], BaseTeamId.prototype, "_id", void 0);
BaseTeamId = __decorate([
    (0, type_graphql_1.InputType)()
], BaseTeamId);
exports.BaseTeamId = BaseTeamId;
