import { Field, InputType } from 'type-graphql';
import { IsEmail, Max, Min, MinLength } from 'class-validator';
import { ObjectId } from 'mongodb';

@InputType()
export class CreateUser {

    @MinLength(2)
    @Field()
    firstName: string;

    @MinLength(2)
    @Field()
    lastName: string;

    @IsEmail()
    @Field()
    email: string;

    @MinLength(8)
    @Field()
    password: string;

    @Min(18)
    @Max(35)
    @Field()
    age: number;

    @Field()
    turnover: number;

    @Field()
    type: string;
}

@InputType()
export class EditUser {
    @MinLength(2)
    @Field()
    firstName: string;

    @MinLength(2)
    @Field()
    lastName: string;

    @Field()
    turnover: number;
}

@InputType()
export class BaseUserId extends CreateUser {
    @Field()
    _id: ObjectId;
}
