import React, { useState } from 'react';
import './style.css';
import carData from '../../data.json'

 //searchBar can search on the basis of product name 

function SearchBar(props) {
    
  const [searchText, setSearchText] = useState('');

  //text in searchbar
  const handleSearch = (text) => {
    setSearchText(text);

    //results
    const filteredResults = carData.items.filter(item =>
      item.carVariantId.toLowerCase().includes(text.toLowerCase())
    );
    props.setfilteredData(filteredResults);
  };

  return (
    <div className='searchcontainer'>
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;
