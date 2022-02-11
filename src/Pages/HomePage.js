import { useState, useEffect } from 'react';

import PageTitle from '../Components/PageTitle';
import Container from '../Components/Container';
import { getDayTrandingMovies } from '../Components/api';
import MovieList from '../Components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
      getDayTrandingMovies()
     .then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Container>
      <PageTitle title={'Trending today'} />
      {movies === null ? <p>...Loading</p> : <MovieList movies={movies}/>}
    </Container>
  );
};

export default HomePage;