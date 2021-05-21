export const people = [
  {
    id: "1",
    name: "nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "park",
    age: 30,
    gender: "male",
  },
  {
    id: "3",
    name: "shinyong",
    age: 30,
    gender: "male",
  },
  {
    id: "4",
    name: "김동영",
    age: 18,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => people.id === id);
  return filteredPeople[0];
};
//filter는 모든 대상을 거친 뒤 해당조건에 맞는걸 리턴함
