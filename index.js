import { GraphQLServer } from "graphql-yoga";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const server = new GraphQLServer({});
server.start(() => console.log("Server is running on localhost:4000"));
