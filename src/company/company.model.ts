import { ObjectType, Field } from '@nestjs/graphql';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { User } from '../user/user.model';

@ObjectType()
@Table
export class Company extends Model {
  @Field()
  @Column
  name: string;

  @Field(() => [User], { nullable: true })
  @HasMany(() => User)
  users: User[];
}
