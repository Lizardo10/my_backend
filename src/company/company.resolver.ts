import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  ID,
  Parent,
} from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  // Mutation resolver to create a new company
  @Mutation(() => Company)
  createCompany(@Args('createCompanyDto') createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  // Query resolver to fetch all companies
  @Query(() => [Company])
  companies() {
    return this.companyService.findAll();
  }

  // ResolveField resolver to fetch the ID of a company
  @ResolveField(() => ID)
  id(@Parent() company: Company) {
    return company.id;
  }
}
