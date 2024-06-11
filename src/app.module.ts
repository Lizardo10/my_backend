import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    // Setting up Sequelize for database interaction
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'lizardo2024',
      password: '7OG3TDHWL5oQRj6C',
      database: 'my_backend',
      autoLoadModels: true,
      synchronize: true, // Sync models with database
    }),
    // Setting up GraphQL with Apollo driver
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Auto-generate GraphQL schema
    }),
    // Importing UserModule and CompanyModule
    UserModule,
    CompanyModule,
  ],
})
export class AppModule {}
