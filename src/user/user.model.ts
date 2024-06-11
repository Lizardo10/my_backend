import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Company } from '../company/company.model';

@ObjectType()
@Table
export class User extends Model {
  @Field()
  @Column
  name: string;

  @Field()
  @Column
  email: string;

  @Field(() => Int)
  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  @Field(() => Company)
  company: Company;
}
