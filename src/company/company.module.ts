import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { Company } from './company.model';
import { User } from '../user/user.model';

@Module({
  // Importing SequelizeModule to make Sequelize models available to the module
  imports: [SequelizeModule.forFeature([Company, User])],
  // Providing CompanyService and CompanyResolver as providers within the module
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
