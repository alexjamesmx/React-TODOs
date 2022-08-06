import React,{createContext, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const TodoContext = createContext();

function TodoProvider(props){


    const {item: todos, saveItem, loading, error,} = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false)
    //ADD TODOs------------------------
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({text: text, completed:false})
      saveItem(newTodos)

    }


    //CONTADOR DE COMPLETADOS
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    //------------------------------
    //FILTAR BUSQUEDA
    let searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    //----------------------------
    //MARCAR CHECK DE COMPLETADO
    const toggleCompleteTodos = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveItem(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => todo.text !== text);
      saveItem(newTodos);
    };
    return(



        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodos,
            deleteTodo,
            setOpenModal,
            openModal,
            addTodo
        }}>
            {props.children}

        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}