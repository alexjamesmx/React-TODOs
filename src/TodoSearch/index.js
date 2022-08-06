import React, { useContext} from "react";
import "./TodoSearch.css";
import {TodoContext} from '../TodoContext'


function TodoSearch() {

  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSeachValueChange = (event) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
    };

  return (
    <input
      className="TodoSearch"
      placeholder="Search"
      value={searchValue}
      onChange={onSeachValueChange}
    />
  );

}

export {TodoSearch};
