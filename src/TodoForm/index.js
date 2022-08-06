import React, { useContext,useState } from "react";
import {TodoContext} from '../TodoContext'
import './TodoForm.css'
function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)
    

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    const onCancel = () => {
        setOpenModal(prevState => !prevState)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(prevState => !prevState)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Add new TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar cebolla"
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button-cancel'
                    >Cancel</button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button-add'
                    >Add</button>
            </div>
        </form>
    )
}
export {TodoForm};