import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as trainee from './trainee';
import * as user from './user';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
// console.log('typesArray Query', typesArray.Query);
const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.Query,
      ...trainee.Query,
    },
    Mutation: {
      ...trainee.Mutation,
      ...user.Mutation,
    },
    Subscription: {
      ...trainee.Subscription,
    },
  },
  typeDefs,
};
