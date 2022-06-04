import { ArgsType, Field } from 'type-graphql';
import { IsEmail, MinLength } from 'class-validator';

@ArgsType()
export class LoginArguments {
    @IsEmail()
    @Field()
    email: string;

    @MinLength(8)
    @Field()
    password: string;
}
