let movies = [
  {
    id: 0,
    name: "Star wars- Shit",
    score: 8,
  },
  {
    id: 1,
    name: "transformer",
    score: 9,
  },
  {
    id: 2,
    name: "interstella",
    score: 7.5,
  },
  {
    id: 3,
    name: "Logan",
    score: 6,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};
//filter는 모든 대상을 거친 뒤 해당조건에 맞는걸 리턴함

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
