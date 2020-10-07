import React , {useState} from "react";
import { SearchBarStyled } from "./styles";

const SearchBar = (props) => {
    const handlechange = event =>{
        props.setQuery(event.target.value);
    }
  return( <SearchBarStyled
  placeholder="Search for  name" type="text" onChange={handlechange}
 // onChange={(event) => props.setQuery(event.target.value)}
/>);
};

export default SearchBar;