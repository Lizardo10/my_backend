import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Company } from '../company/company.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  // Method to create a new user
  create(createUserDto: {
    name: string;
    email: string;
    companyId: number;
  }): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  // Method to find all users, optionally filtering by companyId
  findAll(companyId?: number): Promise<User[]> {
    if (companyId) {
      // If companyId is provided, include filtering by companyId and include associated Company
      return this.userModel.findAll({
        where: { companyId },
        include: [Company],
      });
    }
    // If no companyId is provided, include all users and associated Company
    return this.userModel.findAll({ include: [Company] });
  }
}
