# apollo-server
What is GraphQL?
>>GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing   data. >>GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.GraphQL is a new architectural element >>that eliminates the need for frontend teams to repeatedly ask backend teams for new endpoints or changes to exisitng endpoints.

Difference between GraphQL and Rest?
>> GraphQL architecture is client-driven and Rest is server-driven. GraphQL organized in terms of schema and type system and Rest is >>endpoints. ... GraphQL data fetching specific data with a single API call and Rest fixed data with multiple API calls. GraphQL >>community is growing and Rest are Large.

Write down about Schema and Resolvers.
>> The GraphQL Schema:-
The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.

The root types are the query type, mutation type, and subscription type, which are the three types of operations you can run request from a GraphQL server. The query type is compulsory for any GraphQL schema, while the other two are optional. While we can define custom types in the schema, the GraphQL specification also defines a set of built-in scalar types. They are Int, Float, Boolean, String, and ID.

Let's go ahead and create a schema. Add a new file src/index.js with the following content:

const typeDefs = `
  type Book {
    id: Int!
    title: String!
    pages: Int
    chapters: Int
  }

  type Query {
    books: [Book!]
    book(id: Int!): Book
  }
`;

>>implementing Resolvers:-
Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler.
Our API is able to run two query operations: one to retrieve an array of books and another to retrieve a book based on its id. The next step for us is to define how these queries get resolved so that the right fields are returned to the client.

The way to do this is by defining a resolver function for every field in the schema. Remember that I mentioned that GraphQL has an execution algorithm? The implementation of this execution algorithm is what transforms the query from the client into actual result, by moving through every field in the schema, and executing their “resolver” function to determine its result.

Add the code below to index.js:

const books = [{
  id: 1,
  title: "Fullstack tutorial for GraphQL",
  pages: 356
}, {
  id: 2,
  title: "Introductory tutorial to GraphQL",
  chapters: 10
}, {
  id: 3,
  title: "GraphQL Schema Design for the Enterprise",
  pages: 550,
  chapters: 25
}];

const resolvers = {
  Query: {
    books: function(root, args, context, info) {
      return books;
    },
    book: (root, args, context, info) => books.find(e => e.id === args.id)
  },
  Book: {
    id: parent => parent.id,
    title: parent => parent.title,
    pages: parent => parent.pages,
    chapters: parent => parent.chapters
  }
};



