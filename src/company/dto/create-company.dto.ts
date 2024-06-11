import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCompanyDto {
  @Field()
  @IsString()
  name: string;
}
