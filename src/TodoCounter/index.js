import React, {useContext} from "react";
import './TodoCounter.css' 
import {TodoContext} from '../TodoContext'



function TodoCounter(props){

    const {completedTodos, totalTodos} = useContext(TodoContext);

    return(
        <h2 className='TodoCounter'> Has complentado {completedTodos} de {totalTodos} ToDOs</h2>
    )
}

export {TodoCounter};