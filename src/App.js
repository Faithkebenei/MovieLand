import React, { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// e0bf230d
const API_URL = "http://omdbapi.com?apikey=e0bf230d";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
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
                value="Superman"
                onChange={() => {}}></input>
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}/>
            </div>
        </div>
    );
}

export default App;