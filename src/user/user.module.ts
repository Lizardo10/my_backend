import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './user.model';
import { Company } from '../company/company.model';

@Module({
  // Importing SequelizeModule to make Sequelize models available to the module
  imports: [SequelizeModule.forFeature([User, Company])],
  // Providing UserService and UserResolver as providers within the module
  providers: [UserService, UserResolver],
})
export class UserModule {}
