import React from 'react';
import SearchBar from '../searchbarcar';
import './style.css';


const Navbar = (props) => {
    const setfilteredData = props.setfilteredData


    return (
        <nav className="navbar">
            <div className="container">
                <SearchBar setfilteredData={setfilteredData}/>
            </div>
        </nav>
    );
};

export default Navbar;
