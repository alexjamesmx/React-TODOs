import React, {useContext} from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch/index.js";
import {TodoList} from "../TodoList/index.js";
import {TodoItem} from "../TodoItem/index.js";
import {CreateTodoButton} from "../CreateTodoButton/index.js";
import {TodoContext} from "../TodoContext";
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodos, 
        deleteTodo,
        openModal,
        setOpenModal} = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>'error cargando</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

          {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
          )}
      
      <CreateTodoButton 
      setOpenModal={setOpenModal}/>
    </>
  );
}

export {AppUI};
