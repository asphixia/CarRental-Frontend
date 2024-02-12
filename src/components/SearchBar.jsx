import React from 'react';
import '../styling/searchBarStyling.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar-container">
            <form onSubmit={(e) => e.preventDefault()} className="search-bar-form">
                <input 
                    type="text" 
                    aria-label="Search" 
                    placeholder="Search here..." 
                    value={searchTerm} 
                    onChange={e => onSearchChange(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;