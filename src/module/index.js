import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

import * as user from './user';
import * as Mutation from './trainee';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.Query,
    },
    Mutation: {
      ...Mutation.Mutation,
    },
  },
  typeDefs,
};
