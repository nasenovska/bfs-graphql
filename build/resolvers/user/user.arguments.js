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
exports.BaseUserId = exports.EditUser = exports.CreateUser = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
let CreateUser = class CreateUser {
};
__decorate([
    (0, class_validator_1.MinLength)(2),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.MinLength)(2),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Min)(18),
    (0, class_validator_1.Max)(35),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateUser.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateUser.prototype, "turnover", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "type", void 0);
CreateUser = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUser);
exports.CreateUser = CreateUser;
let EditUser = class EditUser {
};
__decorate([
    (0, class_validator_1.MinLength)(2),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUser.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.MinLength)(2),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUser.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], EditUser.prototype, "turnover", void 0);
EditUser = __decorate([
    (0, type_graphql_1.InputType)()
], EditUser);
exports.EditUser = EditUser;
let BaseUserId = class BaseUserId extends CreateUser {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], BaseUserId.prototype, "_id", void 0);
BaseUserId = __decorate([
    (0, type_graphql_1.InputType)()
], BaseUserId);
exports.BaseUserId = BaseUserId;
