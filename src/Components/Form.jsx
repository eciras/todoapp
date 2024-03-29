import React from "react";
import { v4 as uuid } from 'uuid';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const inputId = uuid()
            setTodos([
            ...todos, {text: inputText, completed: false, id: inputId}
        ]);
        setInputText('');
    }

const statusHandler = (e) => {
    // console.log(e.target.value)
    setStatus(e.target.value)
}    


    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;