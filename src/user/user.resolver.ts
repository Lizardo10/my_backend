import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // Mutation to create a new user
  @Mutation(() => User)
  createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Query to fetch all users or users filtered by companyId
  @Query(() => [User])
  users(
    @Args('companyId', { type: () => Int, nullable: true }) companyId: number,
  ) {
    return this.userService.findAll(companyId);
  }
}
