import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Storage, User } from '../../entities/user.entity';
import { UserType } from '../../entities/user-type.enum';
import { AuthenticationError, UserInputError } from 'apollo-server-core';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv';
import { Context } from '../../common/context';
import { LoginArguments } from './login.arguments';

dotenv.config();

@Resolver()
export class UserResolver {

    @Authorized([UserType.BFS, UserType.TRAINER, UserType.REFEREE])
    @Query(() => [User])
    async getAll(): Promise<User[]> {
        return Storage.find({});
    }

    @Authorized([UserType.BFS, UserType.TRAINER, UserType.REFEREE])
    @Query(() => User)
    async user(@Arg('_id') id: string): Promise<User> {
        return Storage.findById(id);
    }

    @Query(() => User)
    async me(@Ctx() context: Context): Promise<User> {
        if (!context.user) {
            throw new AuthenticationError('Please authenticate.');
        }

        return Storage.findById(context.user._id);
    }

    @Mutation(() => String)
    async login(@Args() {email, password}: LoginArguments) {

        const user = await Storage.findOne({email})
        if (!user) {
            throw new UserInputError('Sorry, but you are entered wrong email or password');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if (!isPasswordValid) {
            throw new UserInputError('Sorry, but you are entered wrong email or password');
        }

        await user.save();
        const _id = user._id, type = user.type;

        const token = jsonwebtoken.sign(
            {_id, type},
            process.env.JWT_SECRET,
            {expiresIn: process.env.TOKEN_EXPIRATION}
        );

        localStorage.setItem(process.env.IDENTITY_KEY, token);

        return token;
    }

    @Mutation(() => String)
    async logout() {

        if (localStorage.getItem(process.env.IDENTITY_KEY)) {
            return 'Not logged in.';
        }

        localStorage.removeItem(process.env.IDENTITY_KEY);

        return 'Successfully logged out.';
    }

    @Authorized([UserType.BFS, UserType.TRAINER])
    @Mutation(() => User)
    async delete(@Arg('_id') id: string): Promise<User> {
        return Storage.findByIdAndRemove(id);
    }
}
