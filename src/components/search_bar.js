// search bar lives here

import React from 'react';

//{Component} eq const Component = React.component;
// class based component

const SearchBar = ({onSearch}) => {
		return(
		   <div className="search-bar">
		    <input 
		       onChange={(event) => onSearch(event.target.value)} />
		   </div>
		 );
}


export default SearchBar;
