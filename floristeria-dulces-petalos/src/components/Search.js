import React from 'react';
function Search({ onSearchChange }) {
    return (
        <div>
            <input type="text" placeholder="Buscar productos..." onChange={onSearchChange}/>
        </div>
    )
}
export default Search;