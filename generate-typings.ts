import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const df = new GraphQLDefinitionsFactory();

df.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
});
