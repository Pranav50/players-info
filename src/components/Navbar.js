import React from 'react';

const Navbar = ({handleSearchInput}) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand">Players</a>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e) => handleSearchInput(e.target.value)} aria-label="Search" />
            </form>
        </nav>
    );
};

export default Navbar;