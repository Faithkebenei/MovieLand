import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

// e0bf230d
const API_URL = "http://omdbapi.com?apikey=e0bf230d";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('spiderman');
    }, [])
    
    return (
        <div className="app">
         <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}></input>
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}/>
            </div>

            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            
            
        </div>
    );
}

export default App;