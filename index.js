import { GraphQLServer } from "graphql-yoga";
import resolve from "./graphql/resolvers";

const server = new GraphQLServer({ typeDefs: "graphql/schema.graphql", resolvers: resolve });
//typeDefs는 모든 type들에 대한 정의임 , 참고로 위에 2번째 resolves로 하면 뒤에 간략화로 resolvers로 끝낼수 있음
//GraphQl Resolvers는 GraphQl 서버에서 요청을 받음. 서버가 Query나 Mutation의 정의를 발견하면 Resolver를 찾을것이고 함수를 실행할거임
server.start(() => console.log("Server is running on localhost:4000"));
