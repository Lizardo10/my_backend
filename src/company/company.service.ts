import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';
import { User } from '../user/user.model';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private readonly companyModel: typeof Company,
  ) {}

  // Method to create a new company
  create(companyModel: { name: string }): Promise<Company> {
    return this.companyModel.create(companyModel);
  }

  // Method to find all companies and include associated users
  findAll(): Promise<Company[]> {
    return this.companyModel.findAll({ include: [User] });
  }
}
