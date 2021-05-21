//query를 resolve(해결) 하는거임
import { getMovies, getById } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
};
//어떤 사용자가 name query를 보내면 nicolas를 반환하는 함수로 답할 거야

export default resolvers;
