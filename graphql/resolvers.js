//query를 resolve(해결) 하는거임
const resolvers = { Query: { name: () => "nicolas" } };
//어떤 사용자가 name query를 보내면 nicolas를 반환하는 함수로 답할 거야

export default resolvers;
