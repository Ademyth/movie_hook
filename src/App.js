import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'images/redemption.jpg',
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description:
        'An organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL:
        'images/godfather.jpg',
      rating: 9.2,
    },
    {
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL:
        'images/knight.jpg',
      rating: 9.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      <MovieList movies={movies} titleFilter={titleFilter} ratingFilter={ratingFilter} />
      <MovieCard onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
