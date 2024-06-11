import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsInt()
  companyId: number;
}
