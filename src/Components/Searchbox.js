import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
    return(
        <div className="Search">
            <head>
                <script src="https://kit.fontawesome.com/8203d1898f.js"></script>
            </head>
            <div className="search-box">
                <input className="search-txt"
                type='search'
                placeholder='Search Artists'
                
                
                />
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </div>

        </div>

    );
}

export default SearchBox;