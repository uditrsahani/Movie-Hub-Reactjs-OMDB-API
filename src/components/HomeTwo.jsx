import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';



// MovieModal component
const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <img src={movie.Poster} alt={`Poster for ${movie.Title}`} className="w-full mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
        <p className="text-gray-600 mb-2"><b>Year:</b> {movie.Year}</p>
        <p className="text-gray-600 mb-2"><b>Released:</b> {movie.Released}</p>
        <p className="text-gray-600 mb-2"><b>Runtime:</b> {movie.Runtime}</p>
        <p className="text-gray-600 mb-2"><b>Genre:</b> {movie.Genre}</p>
        <p className="text-gray-600 mb-2"><b>Director:</b> {movie.Director}</p>
        <p className="text-gray-600 mb-2"><b>Writer:</b> {movie.Writer}</p>
        <p className="text-gray-600 mb-2"><b>Actors:</b> {movie.Actors}</p>
        <p className="text-gray-600 mb-2"><b>Plot:</b> {movie.Plot}</p>
        <p className="text-gray-600 mb-2"><b>Language:</b> {movie.Language}</p>
        <p className="text-gray-600 mb-2"><b>Country:</b> {movie.Country}</p>
        <p className="text-gray-600 mb-2"><b>IMDb Rating:</b> {movie.imdbRating}</p>
        <p className="text-gray-600 mb-2"><b>Box Office:</b> {movie.BoxOffice}</p>
        <p className="text-gray-600 mb-2"><b>Type:</b> {movie.Type}</p>
        <button className="bg-purple-500 text-white p-2 rounded-lg w-full mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

//hide or display hero section


// Home component
const HomeTwo = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '672aa879';
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const openModal = async (imdbID) => {
    try {
      const apiKey = '672aa879';
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
      const data = await response.json();

      if (data) {
        setSelectedMovie(data);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="flex flex-col md:flex-row items-center mb-4"
      
      >
      <input
          type="text"
          placeholder="Search for movies..."
          className="p-2 rounded-l-lg w-full focus:outline-none"
          
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-white text-pink-500 p-2 rounded-r-lg ml-2 focus:outline-none">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Display fetched movie data */}
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-white p-4 rounded-lg">
            <img
              src={movie.Poster}
              alt={`Poster for ${movie.Title}`}
              className="w-full mb-2 rounded-lg cursor-pointer"
              onClick={() => openModal(movie.imdbID)}
            />
            <h3 className="text-lg font-semibold mb-2">{movie.Title}</h3>
            <p className="text-gray-600 mb-2">Year: {movie.Year}</p>
          
            <button
              className="bg-purple-500 text-white p-2 rounded-lg w-full focus:outline-none"
              onClick={() => openModal(movie.imdbID)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>

      {/* Display Movie Modal */}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}

      {searchQuery === '' && <LandingPage />}
    </div>
  );
};

export default HomeTwo;
