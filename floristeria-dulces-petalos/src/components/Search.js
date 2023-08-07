import React from 'react';
function Search({ onSearchChange }) {
    return (
        <div >
            <input className='search-input' type="text" placeholder="Buscar productos..." onChange={onSearchChange}/>
        </div>
    )
}
export default Search;