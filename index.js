import { GraphQLServer } from "graphql-yoga";
import resolve from "./graphql/resolvers";

const server = new GraphQLServer({ typeDefs: "graphql/schema.graphql", resolvers: resolve });
//typeDefs는 모든 type들에 대한 정의임 , 참고로 위에 2번째 resolves로 하면 뒤에 간략화로 resolvers로 끝낼수 있음
server.start(() => console.log("Server is running on localhost:4000"));
