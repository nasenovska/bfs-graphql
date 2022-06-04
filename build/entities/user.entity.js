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
exports.Storage = exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const prop_1 = require("@typegoose/typegoose/lib/prop");
const user_type_enum_1 = require("./user-type.enum");
const typegoose_1 = require("@typegoose/typegoose");
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, prop_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], User.prototype, "turnover", void 0);
__decorate([
    (0, prop_1.prop)({ default: user_type_enum_1.UserType.PLAYER }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
User = __decorate([
    (0, typegoose_1.modelOptions)({
        options: {
            allowMixed: typegoose_1.Severity.ALLOW
        }
    }),
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
exports.Storage = (0, typegoose_1.getModelForClass)(User, {
    schemaOptions: {
        timestamps: true
    }
});
