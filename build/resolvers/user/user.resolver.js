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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const user_entity_1 = require("../../entities/user.entity");
const user_type_enum_1 = require("../../entities/user-type.enum");
const apollo_server_core_1 = require("apollo-server-core");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const login_arguments_1 = require("./login.arguments");
dotenv_1.default.config();
let UserResolver = class UserResolver {
    async getAll() {
        return user_entity_1.Storage.find({});
    }
    async user(id) {
        return user_entity_1.Storage.findById(id);
    }
    async me(context) {
        if (!context.user) {
            throw new apollo_server_core_1.AuthenticationError('Please authenticate.');
        }
        return user_entity_1.Storage.findById(context.user._id);
    }
    async login({ email, password }) {
        const user = await user_entity_1.Storage.findOne({ email });
        if (!user) {
            throw new apollo_server_core_1.UserInputError('Sorry, but you are entered wrong email or password');
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new apollo_server_core_1.UserInputError('Sorry, but you are entered wrong email or password');
        }
        await user.save();
        const _id = user._id, type = user.type;
        const token = jsonwebtoken_1.default.sign({ _id, type }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
        localStorage.setItem(process.env.IDENTITY_KEY, token);
        return token;
    }
    async logout() {
        if (localStorage.getItem(process.env.IDENTITY_KEY)) {
            return 'Not logged in.';
        }
        localStorage.removeItem(process.env.IDENTITY_KEY);
        return 'Successfully logged out.';
    }
    async delete(id) {
        return user_entity_1.Storage.findByIdAndRemove(id);
    }
};
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS, user_type_enum_1.UserType.TRAINER, user_type_enum_1.UserType.REFEREE]),
    (0, type_graphql_1.Query)(() => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAll", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS, user_type_enum_1.UserType.TRAINER, user_type_enum_1.UserType.REFEREE]),
    (0, type_graphql_1.Query)(() => user_entity_1.User),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Query)(() => user_entity_1.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_arguments_1.LoginArguments]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_type_enum_1.UserType.BFS, user_type_enum_1.UserType.TRAINER]),
    (0, type_graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, type_graphql_1.Arg)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "delete", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
