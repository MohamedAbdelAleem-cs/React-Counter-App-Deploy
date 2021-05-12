import React, { Component } from 'react';

//stateless functional component
//to use props we need to pass props as an arguement

const navBar = ({totalCounters }) =>{
    console.log('NavBar -  Rendered');
    return (<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">
            {totalCounters}
            </span>
        </a>
</nav>);
    };
 
export default navBar;